const mongoose=require('mongoose')
const ExpenseSchema=new mongoose.Schema({
    amount:{
        type:Number,
        required:true,

    },
    date: {
        type: Date,
        default: Date.now
    },
    category:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
    }

})
const Expense=mongoose.model('expense',ExpenseSchema)
module.exports=Expense