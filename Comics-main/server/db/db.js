const mongoose = require("mongoose")
const database = async(url) =>{
    try {
        await mongoose.connect(url,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const db = mongoose.connection
        console.log("Database:",db.name,"port:",db.port,"host:",db.host);
      } 
    catch (error) {
        console.log(error);
    }
  
}

module.exports=database