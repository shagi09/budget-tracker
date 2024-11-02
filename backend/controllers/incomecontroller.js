const Income=require('../models/income')


module.exports.income_Get=async (req,res)=>{
    try{
        const userId=req.userId;
        const incomes=await Income.find({user:userId})
        res.status(201).json(incomes)

    }
    catch(err){
        res.status(500).json({error:err.message})
    }



}

module.exports.income_GetAll = async (req, res) => {
    const userId = req.userId;

    try {
        // Fetch all expenses for the user
        const incomes = await Income.find({ user: userId });

        // Group expenses by month
        const monthlyIncomes = Array(12).fill(null); // Initialize an array for 12 months

        incomes.forEach(income => {
            if(income.date){
                const month = income.date.getMonth(); // Get month (0-11)
                if (monthlyIncomes[month] === null) {
                    monthlyIncomes[month] = {
                        month: month + 1, // Store month as 1-12
                        amount: income.amount
                    };
                }
            }
            else{
                console.log('Invalid date for income:', income); 

            }

        });
        const responseIncomes = monthlyIncomes.filter(inc => inc !== null);



        res.status(200).json(responseIncomes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
module.exports.income_Post=async (req,res)=>{
    const{amount,category,description,date}=req.body
    console.log('Income data received:', req.body);
    try{
        const userId=req.userId;
        if (!userId) {
            return res.status(403).json({ message: 'User ID not found' });
        }
        const income=await Income.create({amount,category,description,date,user:userId})
        res.status(201).json(income)
    }
    catch(err){
        res.status(400).json({ error: err.message });
        console.log(err)
    }




}
module.exports.income_Delete=async (req,res)=>{
        try {
            const userId=req.userId;
            const id=req.params.id;
            console.log('id to delete',id)
            console.log('user id',userId)
            const income = await Income.findOneAndDelete({_id: id,user:userId});
            if (!income) {
                return res.status(404).json({ error: 'income not found' });
            }
            res.json({ message: 'income deleted successfully' });
        } catch (err) {
            console.log('err deleting income:',err)
            res.status(500).json({ error: err.message });
        }
    };

module.exports.income_Put=async (req,res)=>{
    const {  amount,category,description,date } = req.body;

    try {
        const income = await Income.findByIdAndUpdate(req.params.id, {  amount,category,description,date }, { new: true });
        if (!income) {
            return res.status(404).json({ error: 'income not found' });
        }
        res.json(income);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }

}