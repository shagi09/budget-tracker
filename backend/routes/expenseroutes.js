const express = require('express');
const router = express.Router();
const expensecontroller=require('../controllers/expensecontroller')

router.get('/expense',expensecontroller.expense_Get)
router.post('/expense',expensecontroller.expense_Post)
router.delete('/expense/:id',expensecontroller.expense_Delete)
router.put('/expense/:id',expensecontroller.expense_Put)

module.exports=router