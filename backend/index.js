const mongoose=require('mongoose')
const express=require('express')
const cors=require('cors')
const authroutes=require('./routes/authroutes')
const expenseroutes=require('./routes/expenseroutes')
const incomeroutes=require('./routes/incomeroutes')
const transactionroutes=require('./routes/transactionroutes')

const app=express();

app.use(express.json())
app.use(cors())

const url='mongodb://127.0.0.1:27017/budget'
mongoose.connect(url).then((result)=>{
    console.log('Successfully connected to the database');
    app.listen(5000,()=>{
        console.log('app listening on port 5000')
    })

}).catch((err)=>{
    console.log(err);
})

app.use(authroutes)
app.use(expenseroutes)
app.use(incomeroutes)
app.use(transactionroutes)
