const mongoose=require('mongoose')
const express=require('express')
const cors=require('cors')
const cookieParser=require('cookie-parser')

const authroutes=require('./routes/authroutes')
const expenseroutes=require('./routes/expenseroutes')
const incomeroutes=require('./routes/incomeroutes')
const transactionroutes=require('./routes/transactionroutes')
const profileroutes=require('./routes/profileroutes')

const app=express();
app.use(cookieParser())

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173', // Your frontend URL
    credentials: true // Allow credentials (cookies, authorization headers, etc.)
}));


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
app.use(profileroutes)
