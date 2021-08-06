const express = require ('express')
const router = express.Router()
const user = require ('../Controller/authController')
//const jwt = require('jsonwebtoken');
//const { loginRules, registerRules, validation } = require('../Middleware/validator');

//Register :registerRules(), validation,
 router.post('/register',  user.register)


//Login:loginRules(), validation, 

router.post('/login', user.login)

module.exports = router