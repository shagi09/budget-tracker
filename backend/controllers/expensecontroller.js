const Expense=require('../models/expense')
module.exports.expense_Get=async (req,res)=>{
    try{
        const expenses=await Expense.find()
        res.status(201).json(expenses)

    }
    catch(err){
        res.status(500).json({error:err.message})
    }



}
module.exports.expense_Post=async (req,res)=>{
    const{amount,category,description}=req.body
    try{
        const expense=await Expense.create({amount,category,description})
        res.status(201).json(expense)
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }




}
module.exports.expense_Delete=(req,res)=>{
    res.json('delete expense')

}
module.exports.expense_Put=(req,res)=>{
    res.json('update expense')

}