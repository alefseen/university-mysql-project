const jwt = require("jsonwebtoken");
const config = require("../config");
const rep = require('../services/repository/repository');

async function login(req, res, next) {
  console.log(req.body);
  const { number, password } = req.body;
  if(!number || !password) return res.status(400).send();

  let student = await rep.getItemsByOptions(req, "student", { 
    where: { number }
  });

  if (!student.length || student.length>1) res.status(600);

  else {
    if (password == student[0].password) {
      let token = jwt.sign({ id: student[0].id }, config.secretKey, {
        expiresIn: "24h" // expires in 24 hours
      });
      res.send({ token,
        name:student[0].name,
       });
    } else res.status(601);
  }
  res.end();
}
module.exports = { login };
