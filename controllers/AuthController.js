const jwt = require("jsonwebtoken");
const config = require("../config");
const rep = require('../services/repository/repository');

async function login(req, res, next) {
  const { number, password } = req.body;
  if(!number || !password) return res.status(400).send();

  let user = await rep.getItemsByOptions(req, "User", { 
    where: { number }
  });

  if (!user.length || user.length>1) res.status(600);

  else {
    if (password == user[0].password) {
      let token = jwt.sign({ id: user[0].id }, config.secretKey, {
        expiresIn: "24h" // expires in 24 hours
      });
      res.send({ token,user:{
        name:user[0].name,
        number:user[0].number
      } });
    } else res.status(601);
  }
  res.end();
}
module.exports = { login };
