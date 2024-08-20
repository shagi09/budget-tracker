const mongoose=require('mongoose')
const express=require('express')
const authroutes=require('./routes/authroutes')
const expenseroutes=require('./routes/expenseroutes')

const app=express();

app.use(express.json())

const url='mongodb://127.0.0.1:27017/budget'
mongoose.connect(url).then((result)=>{
    console.log('Successfully connected to the database');
    app.listen(6000,()=>{
        console.log('app listening on port 6000')
    })

}).catch((err)=>{
    console.log(err);
})

app.use(authroutes)
app.use(expenseroutes)
