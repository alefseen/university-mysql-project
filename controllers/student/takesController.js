const rep = require('../../services/repository/repository');
const { Op } = require("sequelize");

async function archiveSections(req, res, next) {
  const db = req.app.get("db");

  const id = req.decoded.id;
  const courses = await rep.getItemByOptions(req, "person", {
    where: {
      id,
    },
    attributes: {
      exclude: ['password', 'instructor_id', 'student_id']
    },

    include: [
      {
        model: db.student,
        as: "student",
        attributes: ["id"],
        include: [{
          model: db.section,
          as: "sections",
          through: {
            model: db.takes,
            attributes: ['grade'],
          },
          include: [
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

  const mappedCourses = courses.student.sections.map(({ semester, year, id, takes: { grade }, course: { title, credits } }) => ({
    id,
    grade,
    title,
    credits,
    semester: `${year} ${semester}`
  }))

  return res.send(mappedCourses)
}


async function canGivenSections(req, res, next) {
  const db = req.app.get("db");

  const id = req.decoded.id;
  const deptSections = await rep.getItemByOptions(req, "person", {
    where: {
      id,
    },
    attributes: [],
    include: [
      {
        model: db.student,
        as: "student",
        include: [{
          model: db.department,
          as: "department",
          include: [
            {
              model: db.course,
              as: "courses",
              attributes: ['id', 'title', 'credits'],
              include: [
                {
                  model: db.section,
                  as: "sections",
                  attributes: ['id', 'semester', 'year'],
                  include: [
                    {
                      model: db.instructor,
                      as: "instructors",
                      through: db.teaches,
                      include: [
                        {
                          model: db.person,
                          as: "person",
                          attributes: ['id', 'name'
                          ],
                        }
                      ]
                    }
                  ]
                },
              ],
            },
          ]
        }]
      },
    ],
  });

  const takedCourses = await rep.getItemByOptions(req, "person", {
    where: {
      id,
    },
    attributes: {
      exclude: ['password', 'instructor_id', 'student_id']
    },

    include: [
      {
        model: db.student,
        as: "student",
        attributes: ["id"],
        include: [{
          model: db.section,
          as: "sections",
          through: {
            model: db.takes,
            attributes: ['grade'],
            where: {
              grade: {
                [Op.in]: [
                  'A',
                  'A+',
                  'A-',
                  'B',
                  'B+',
                  'B-',
                  null
                ]
              }
            }
          },
          include: [
            {
              model: db.course,
              as: "course",
              attributes: ['id']
            },
          ]
        }]
      },
    ],
  });

  const takedCoursesID = takedCourses.student.sections.map(({ course: { id: courseId } }) => courseId);

  const validCourses = deptSections.student.department.courses.filter(({ id }) => !takedCoursesID.includes(id)).map(
    ({ id }) => id
  )

  const openToGetCourses = deptSections?.student.department.courses.filter(({ id }) => validCourses.includes(id));

  const courses = openToGetCourses.map(({ title, credits, sections }) => (
    {
      title,
      credits,
      sections: sections.map(({ id, semester, year, instructors }) => (
        {
          id,
          semester: `${semester} ${year}`,
          instructors: instructors.map(({ person: { name } }) => (
            name
          )).join(', ')
        }
      ))
    }
  ))

  const response = []

  courses.forEach(({ sections, ...c }) => {
    sections.forEach(s => {
      response.push({ ...c, ...s })
    })
  });

  res.send(response)
}

async function submitCourses(req, res, next) {
  const db = req.app.get("db");

  const id = req.decoded.id;

  const { student_id: studentId } = await rep.getById(req, 'person', id)

  const takes = req.body.takes.map(sectionId => ({ sectionId, studentId, grade: null }))

  try {
    await rep.bulkUpdateItems(req, 'takes', takes, ['grade'])
    return res.send({ status: 'success' })
  }
  catch (e) {
    return res.send({ status: 'error' })
  }
}


module.exports = { archiveSections, canGivenSections, submitCourses };
