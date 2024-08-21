const mongoose=require('mongoose')
const IncomeSchema=new mongoose.Schema({
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
    }

})
const Income=mongoose.model('income',IncomeSchema)
module.exports=Income