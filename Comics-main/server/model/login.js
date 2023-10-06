const mongoose = require("mongoose")
const {Schema} = mongoose

const loginSchema = new Schema ({
    userName:{
        type:String,
        require : true,
        unique : true
    },
    password:{
        type:String,
        require : true
    }
})

const Login = mongoose.model('Login',loginSchema)

module.exports = Login