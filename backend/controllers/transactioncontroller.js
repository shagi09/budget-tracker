const Expense=require('../models/expense')
module.exports.transaction_Get=async (req,res)=>{
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

