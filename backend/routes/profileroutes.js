const express = require('express');
const router = express.Router();
const authenticate=require('../middleware/authenticate')
const profilecontroller=require('../controllers/profilecontroller')

router.get('/profile',authenticate,profilecontroller.profile_Get)
router.get('/profile',authenticate,profilecontroller.profile_Put)

module.exports=router