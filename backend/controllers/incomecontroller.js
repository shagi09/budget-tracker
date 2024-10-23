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
    }




}
module.exports.income_Delete=async (req,res)=>{
        try {
            const income = await Income.findByIdAndDelete(req.params.id);
            if (!income) {
                return res.status(404).json({ error: 'income not found' });
            }
            res.json({ message: 'income deleted successfully' });
        } catch (err) {
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