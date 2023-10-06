const comics = require("../model/comics")

const eachcomics = async (req,res)=>{
    try{
        const id = req.params.id
        const data=await comics.find({"_id":id})
        res.status(200).send(data)   
    }catch(err){
            res.status(404).send("error",err)
    }
}


module.exports=eachcomics