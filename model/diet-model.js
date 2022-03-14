const mongoose = require("mongoose")

//schema
let DietSchema =new mongoose.Schema({
    
    title:{
        type:String  
    },

    description:{
        type:String
    },

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})


//model

let DietModel = mongoose.model("diet",DietSchema)
module.exports =DietModel
