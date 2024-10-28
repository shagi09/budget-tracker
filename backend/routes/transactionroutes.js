const express = require('express');
const router = express.Router();
const transactioncontroller=require('../controllers/transactioncontroller')
const authenticate=require('../middleware/authenticate')

router.get('/transaction',authenticate,transactioncontroller.transaction_Get)
module.exports=router