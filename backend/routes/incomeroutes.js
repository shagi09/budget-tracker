const express = require('express');
const router = express.Router();
const incomecontroller=require('../controllers/incomecontroller')
const authenticate=require('../middleware/authenticate')

router.get('/income',authenticate,incomecontroller.income_Get)
router.get('/income/all',authenticate, incomecontroller.income_GetAll);
router.post('/income',authenticate,incomecontroller.income_Post)
router.delete('/income/:id',authenticate,incomecontroller.income_Delete)
router.put('/income/:id',incomecontroller.income_Put)

module.exports=router