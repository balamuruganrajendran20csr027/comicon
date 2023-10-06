const mongoose = require("mongoose")
const {Schema} = mongoose

const comicSchema = new Schema ({
    name:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    synopsis:{
        type:String,
        default:"A story that revolves are the protagonist"
    },year:{
        type:Number,
        require:true
    },
    volume:{
        type:Number,
        require:true
    },image:{
        type:String,
        require:true
    },
    file:{
        type:Buffer,
        require:true
    }
})


const Comics = mongoose.model('comics',comicSchema)

module.exports = Comics