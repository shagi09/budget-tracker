const express = require('express');
const router = express.Router();
const transactioncontroller=require('../controllers/transactioncontroller')

router.get('/transaction',transactioncontroller.transaction_Get)
module.exports=router