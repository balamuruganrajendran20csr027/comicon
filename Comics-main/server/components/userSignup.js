const bcrypt = require("bcrypt")

const Login = require("../model/login")

const userSignup = async (req,res)=>{
    try{
        const name=req.body.userName;
        const password=req.body.password;

        const data=await Login.findOne({"userName":name})
        if(data){
            res.status(200).send({"success":false})
        }
        else{
                hashPassword=await bcrypt.hash(password,10)
            
                const newSignup = new Login({
                    userName:name,
                    password:hashPassword
                })
                console.log(newSignup);
                const dbSignup = await newSignup.save()

                res.status(200).send({"success":true})
        }

    }catch(err){
            res.status(404).send("error",err)
    }
}

module.exports = userSignup 