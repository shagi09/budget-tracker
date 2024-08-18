const express = require('express');
const router = express.Router();

const authcontroller=require('../controllers/authcontroller')

router.post('/signup',authcontroller.SignUp_Post)
router.post('/login',authcontroller.LogIn_Post)

module.exports=router