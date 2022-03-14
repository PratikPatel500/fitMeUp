const mongoose = require("mongoose")


//schema
let User_measurementSchema =new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },

    height:{
        type:String  
    },

    weight:{
        type:String
    },

    bmi:{
        type:String
    },
    
    measurementDate:{
        type:String
    },

    measurnmentByduration:{
        type:String
    }
})


//model

let User_measurementModel = mongoose.model("user_measurement",User_measurementSchema)
module.exports =User_measurementModel