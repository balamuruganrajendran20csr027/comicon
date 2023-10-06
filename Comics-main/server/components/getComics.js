const Comics = require("../model/comics")

const getComics = async (req,res)=>{
    try{
        const data=await Comics.find()
        res.status(200).send(data)   
    }catch(err){
            res.status(404).send("error",err)
    }
}


module.exports=getComics