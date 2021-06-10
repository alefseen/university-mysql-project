const {generateToken} = require("../utils/auth");
const config = require("../config");
const rep = require('../services/repository/repository');
const { Op } = require("sequelize");

async function studentLogin(req, res, next) {
  console.log(req.body);
  const { number, password } = req.body;
  if(!number || !password) return res.status(400).send();

  let student = await rep.getItemsByOptions(req, "person", { 
    where: { 
      number,
      student_id:{
        [Op.not]:null
      }
     },
    include: [
      {
        model: req.app.get("db").student,
        as: "student",
        attributes:["id"]
      },
    ],
  });

  if (!student.length || student.length>1) res.status(600);

  else {
    if (password == student[0].password) {
      const token = generateToken(student[0].id,'student')

      res.send({ token,
        name:student[0].name,
       });
    } else res.status(601);
  }
  res.end();
}

async function instructorLogin(req, res, next) {
  console.log(req.body);
  const { number, password } = req.body;
  if(!number || !password) return res.status(400).send();

  let instructor = await rep.getItemsByOptions(req, "person", { 
    where: { 
      number,
      instructor_id:{
        [Op.not]:null
      }
     },
    include: [
      {
        model: req.app.get("db").instructor,
        as: "instructor",
        attributes:["id"]
      },
    ],
  });

  if (!instructor.length || instructor.length>1) res.status(600);

  else {
    if (password == instructor[0].password) {
      const token = generateToken(instructor[0].id,'instructor')

      res.send({ token,
        name:instructor[0].name,
       });
    } else res.status(601);
  }
  res.end();
}
module.exports = { instructorLogin,studentLogin };
