const mongoose = require("mongoose")

//schema
let Workout_planSchema =new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },

    workout:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"workout"
    },

    workoutdate:{
        type:String  
    },

    workouttime:{
        type:String
    },

    
    isworkoutComplete:{
        type:String
    }
})


//model

let Workout_planModel = mongoose.model("workout_plan",Workout_planSchema)
module.exports =Workout_planModel
