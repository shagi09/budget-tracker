const User=require('../models/user')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

function createToken(id){
    const secret='shalom secret'
    const options={expiresIn:'1h'}
    return jwt.sign({id},secret,options)

}


module.exports.SignUp_Post=async(req,res)=>{
    const{name,email,password,confirmPassword}=req.body
    try{
        const user=await User.create({name,email,password,confirmPassword})
        const token=createToken(user._id)
        res.cookie('jwt',token,{httpOnly:true,maxAge: 3600000})

        res.json(user);

    }
    catch(err){
        res.json(err)

    }


}
module.exports.LogIn_Post=async(req,res)=>{
    const {email,password}=req.body
    const user=await User.findOne({email})
    if(!user){
       return res.json('user does not exist')
    }
    const isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch){
       return res.json('incorrect password')
    }
    const token=createToken(user._id)
    res.cookie('jwt',token,{httpOnly:true,maxAge: 3600000})
        res.json(user)
    


}
module.exports.LogOut_Post=async(req,res)=>{
    res.cookie('jwt','',{maxAge:0})
    res.json('logout success')
}