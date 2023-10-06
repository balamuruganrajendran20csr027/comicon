const bcrypt = require("bcrypt")
const jwt = require ("jsonwebtoken")

const Login = require("../model/login")

const userLogin = async (req,res)=>{
    try{
        const name=req.body.userName;
        const password=req.body.password;
        const data=await Login.findOne({"userName":name})
        
        if(data){ 
            const validatePassword = await bcrypt.compare(password,data.password)
            if(validatePassword){
                const jwt_token = jwt.sign({id:data._id},"token")
                res.status(200).send({"jwt_token":jwt_token,"success":true})
            }else{
                res.status(200).send("false")
            }
        }
        else{
            res.status(200).send("false")
        }
    }catch(err){
            res.status(404).send("error",err)
    }
}


module.exports=userLogin