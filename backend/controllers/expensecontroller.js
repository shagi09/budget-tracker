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
    const{amount,category,description,date}=req.body
    try{
        const expense=await Expense.create({amount,category,description,date})
        res.status(201).json(expense)
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }




}
module.exports.expense_Delete=async (req,res)=>{
        try {
            const expense = await Expense.findByIdAndDelete(req.params.id);
            if (!expense) {
                return res.status(404).json({ error: 'Expense not found' });
            }
            res.json({ message: 'Expense deleted successfully' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };

module.exports.expense_Put=async (req,res)=>{
    const {  amount,category,description,date } = req.body;

    try {
        const expense = await Expense.findByIdAndUpdate(req.params.id, {  amount,category,description,date }, { new: true });
        if (!expense) {
            return res.status(404).json({ error: 'Expense not found' });
        }
        res.json(expense);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }

}