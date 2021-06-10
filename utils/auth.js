const e = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config');

function getTokenFromHeader(req) {
	if ((req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token')
		|| (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer')) {
		return req.headers.authorization.split(' ')[1];
	}

	return null;
}

function verifyToken(req, res, next) {
	try {
		if (!(req.headers.authorization)) {
			res.status(401).end();
			//requestHandler.throwError(401, 'Unauthorized', 'Not Authorized to access this resource!')();
		}
		const Bearer = req.headers.authorization.split(' ')[0];

		if (!Bearer || Bearer !== 'Bearer') {
			res.status(401).end();
			//requestHandler.throwError(401, 'Unauthorized', 'Not Authorized to access this resource!')();
		}

		const token = req.headers.authorization.split(' ')[1];

		if (!token) {
			res.status(401).end();
			//requestHandler.throwError(401, 'Unauthorized', 'Not Authorized to access this resource!')();
		}

		// verifies secret and checks exp
		jwt.verify(token, config.secretKey, (err, decoded) => {
			if (err) {
				console.log(err);
				res.status(500).send();
				//requestHandler.throwError(401, 'Unauthorized', 'please provide a vaid token ,your token might be expired')();
			}
			req.decoded = decoded;
			next();
		});
	} catch (err) {
		console.log(err);
		res.status(402).end();
		//requestHandler.sendError(req, res, err);
	}
}

const generateToken = (id,type)=>{
	return jwt.sign({ id,type }, config.secretKey, {
        expiresIn: "24h" // expires in 24 hours
      });
}

const isStudent = (req,res,next)=>{
	if(req.decoded && req.decoded.type==='student'){
		next()
	}
	else{
		res.status(401);
		res.end()
	}
}

const isInstructor = (req,res,next)=>{
	if(req.decoded && req.decoded.type==='instructor'){
		next()
	}
	else{
		res.status(401);
		res.end()
	}
}

module.exports = { getJwtToken: getTokenFromHeader, isAuthunticated: verifyToken ,generateToken,isInstructor,isStudent};
