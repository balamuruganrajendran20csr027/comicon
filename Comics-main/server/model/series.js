const mongoose = require("mongoose")
const {Schema} = mongoose

const seriesSchema = new Schema ({
    name:{
        type:String,
        require:true
    },
    director:{
        type:String,
        require:true
    },
    cast:{
        type:Array,
        require : true
    },category:{
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
    rating:{
        type:Number,
        require:true
    },
    episodes:{
        type:Number,
        require:true
    },duration:{
        type:String,
        require:true
    },image:{
        type:String,
        require:true
    }
})


const Series = mongoose.model('Series',seriesSchema)

module.exports = Series