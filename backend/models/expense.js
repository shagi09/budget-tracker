const mongoose=require('mongoose')
const ExpenseSchema=new mongoose.Schema({
    amount:{
        type:Number,
        required:true,

    },
    date: {
        type: Date
    },
    category:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assuming you have a User model
        required: true,


    }

})
const Expense=mongoose.model('expense',ExpenseSchema)
module.exports=Expense