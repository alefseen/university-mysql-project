const rep = require('../../services/repository/repository');
const { Op} = require("sequelize");

async function allSections(req, res, next) {
  const db = req.app.get("db");

  const id = req.decoded.id;
  const courses = await rep.getItemByOptions(req, "person", { 
    where: {
      id,
    },
    attributes:{
      exclude:['password','instructor_id','student_id']
    },

    include: [
      {
        model: db.instructor,
        as: "instructor",
        attributes:["id"],
        include: [{
          model: db.section,
          as: "sections",
          through:{
            model:db.teaches,
            attributes:[]
          },
          include:[
            {
              model: db.course,
              as: "course",
            },
            {
              model: db.student,
              as: "students",
              through:{
                model:db.takes,
                attributes:[],
              },
            }
          ]
        }]
      },
    ],
  });

  // res.send(courses.instructor.sections)
  const mapped = courses.instructor.sections.map(({semester,year,id,course:{title,credits},students})=>({
    id,
    title,
    credits,
    semester:`${year} ${semester}`,
    students:students.length
  }))

  return res.send(mapped)
}

async function sectionStudents(req, res, next) {
  const db = req.app.get("db");
  const secId = req.params.section
  const {students} = await rep.getItemByOptions(req, "section", { 
    where:{
      id:{[Op.eq]:secId}
    },
    attributes:[],
    include: [
      {
        model: db.student,
        as: "students",
        through:{
          model:db.takes,
          attributes:['grade'],
        },
        include:[
          {
            model:db.person,
            as:'person',
            attributes:['name']
          }
        ]
      }
    ],
  });
  
const mapped = students.map(({id,takes:{grade},person:{name}})=>({
    id,
    grade,
    name
  }))

  return res.send(mapped)
}

async function submitGrade(req, res, next) {
  const takes = req.body.grades.map(({sectionId,studentId,grade})=>({sectionId,studentId,grade}))

  try{
   await rep.bulkUpdateItems(req,'takes',takes,['grade'])
    return res.send({status:'success'})
}
  catch(e){
    return res.send({status:'error'})
  }
}


module.exports = { allSections,sectionStudents,submitGrade };
