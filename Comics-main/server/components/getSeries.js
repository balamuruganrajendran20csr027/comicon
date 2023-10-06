const Series = require("../model/series")

const getSeries = async (req,res)=>{
    try{
        const data=await Series.find()
        res.status(200).send(data)   
    }catch(err){
            res.status(404).send("error",err)
    }
}


module.exports=getSeries