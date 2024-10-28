const Expense=require('../models/expense')
module.exports.expense_Get=async (req,res)=>{
    try{
        const userId=req.userId;
        const expenses=await Expense.find({user:userId})
        res.status(201).json(expenses)

    }
    catch(err){
        res.status(500).json({error:err.message})
    }



}

module.exports.expense_GetByDate=async (req,res)=>{
    const { date } = req.body;
    const userId=req.userId;

    try {
        // Convert the date from string to a Date object
        const parsedDate = new Date(date);
        const startOfDay = new Date(parsedDate.setHours(0, 0, 0, 0));
        const endOfDay = new Date(parsedDate.setHours(23, 59, 59, 999));

        // Fetch expenses for the specified date
        const expenses = await Expense.find({
            user:userId,
            date: {
                $gte: startOfDay,
                $lte: endOfDay
            }
        });

        res.status(200).json({
            date: date,
            expenses: expenses
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports.expense_Post=async (req,res)=>{
    const{amount,category,description,date}=req.body
    console.log('Expense data received:', req.body);
    try{
        const userId=req.userId;
        if (!userId) {
            return res.status(403).json({ message: 'User ID not found' });
        }
        const expense=await Expense.create({amount,category,description,date,user:userId})
        res.status(201).json(expense)
    }
    catch(err){
        res.status(400).json({ error: err.message });
        console.log(err)
    }




}
module.exports.expense_Delete=async (req,res)=>{
        try {
            const userId=req.userId;
            const id=req.params.id
            const expense = await Expense.findOneAndDelete({_id: id,user:userId});
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