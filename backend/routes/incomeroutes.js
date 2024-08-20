const express = require('express');
const router = express.Router();
const incomecontroller=require('../controllers/incomecontroller')

router.get('/income',incomecontroller.income_Get)
router.post('/income',incomecontroller.income_Post)
router.delete('/income/:id',incomecontroller.income_Delete)
router.put('/income/:id',incomecontroller.income_Put)

module.exports=router