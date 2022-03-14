const mongoose = require("mongoose")

//schema
let WorkoutSchema =new mongoose.Schema({

    Name:{
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

let WorkoutModel = mongoose.model("workout",WorkoutSchema)
module.exports =WorkoutModel
