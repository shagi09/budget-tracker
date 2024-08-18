const User=require('../models/user')
module.exports.SignUp_Post=async(req,res)=>{
    const{email,password}=req.body
    try{
        const user=await User.create({email,password})

        res.json(user);

    }
    catch(err){
        res.json(err)

    }


}
module.exports.LogIn_Post=(req,res)=>{
    res.send('login page')
}