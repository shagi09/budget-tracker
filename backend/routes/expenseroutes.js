const express = require('express');
const router = express.Router();
const expensecontroller=require('../controllers/expensecontroller')
const authenticate=require('../middleware/authenticate')

router.get('/expense',authenticate,expensecontroller.expense_Get)
router.post('/expense/date',authenticate,expensecontroller.expense_GetByDate)
router.post('/expense',authenticate,expensecontroller.expense_Post)
router.delete('/expense/:id',authenticate,expensecontroller.expense_Delete)
router.put('/expense/:id',expensecontroller.expense_Put)

module.exports=router