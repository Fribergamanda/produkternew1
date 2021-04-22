const mongoose = require('mongoose');
const User = require('../users/userSchema');
const bcrypt = require('bcrypt');
const auth = require('../../authentication/auth');

exports.registerUser = (req, res) => {

  User.exists({email: req.body.email}, (err, result) => {
    if(err) {
      return res.status(400).json(err)
    } else {

      if(result) {
        return res.status(400).json({
          statusCode: 400,
          status: false,
          message: 'mailen finns redan registrerad'
        })

      } else {

        const salt = bcrypt.genSaltSync(10);
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if(err){
            return res.status(500).json({
              statusCode: 500,
              status: false,
              message: 'Kunde inte salta lösenordet'
            })
          }

          const newUser = new User ({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            passwordHash: hash
          })

          newUser.save()
          .then(() => {
            res.status(201).json({
              statusCode: 201,
              status: true,
              message: 'Användaren skapades'
            })
          })
          .catch(() => {
            res.status(500).json({
              statusCode: 500,
              status: false,
              message: 'Användaren kunde inte skapas'
            })
          })
        })
      }
    } 
  })
}

exports.loginUser = (req, res) => {
  User.findOne({email: req.body.email})
  .then(user => {
    if(user === null) {
      return res.status(404).json({
        statusCode: 404,
        status: false,
        message: 'ogiltig email eller lösenord'
      })
    }
    try{
    bcrypt.compare(req.body.password, user.passwordHash, (err, result) => {
      if(err){
        return res.status(400).json(err)
      }
      else {
        if(result){
          return res.status(200).json({
            statusCode: 200,
            status: true,
            message: 'inloggningen lyckades',
            token: auth.generateToken(user._id)
          })
        }
        return res.status(401).json({
          statusCode: 401,
          status: false,
          message: 'ogiltig email eller lösenord'
        })
      }
    })
   }
   catch {
     return res.status(500).json({
      statusCode: 500,
      status: false,
      message: 'Gick inte att skapa användaren, kontakta kundtjänst'
     })
   }
  })
}