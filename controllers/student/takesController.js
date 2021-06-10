const rep = require('../../services/repository/repository');
const { Op,col } = require("sequelize");

async function archiveSections(req, res, next) {
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
        model: db.student,
        as: "student",
        attributes:["id"],
        include: [{
          model: db.section,
          as: "sections",
          through:{
            model:db.takes,
            attributes:['grade'],
            where:{
              grade:{[Op.not]:null}
            }
          },
          include:[
            {
              model: db.classroom,
              as: "classroom",
            },
            {
              model: db.course,
              as: "course",
            },
            {
              model: db.timeslot,
              as: "timeslot",
            }
          ]
        }]
      },
    ],
  });

  const mappedCourses = courses.student.sections.map(({semester,year,id,takes:{grade},course:{title,credits}})=>({
    id,
    grade,
    title,
    credits,
    semester:`${year} ${semester}`
  }))

  return res.send(mappedCourses)
}

module.exports = { archiveSections };
