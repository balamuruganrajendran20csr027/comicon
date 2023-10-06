const Movies = require("../model/movies")

const getMovies = async (req,res)=>{
    try{
        const data=await Movies.find()
        res.status(200).send(data)   
    }catch(err){
            res.status(404).send("error",err)
    }
}


module.exports=getMovies