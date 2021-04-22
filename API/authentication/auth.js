const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.SECRET_KEY;

exports.generateToken = (id) => {
  return jwt.sign({id: id}, secretKey, {expiresIn: '1h'})
}

exports.verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1] // för att bara få token delen
    req.userData = jwt.verify(token, secretKey)
    next();
  }
  catch {
    return res.status(401).json({
      statusCode: 401,
      status: false,
      message: 'Du är inte verifierad, vänligen logga in'
    })
  }
}