const mongoose = require("mongoose")

//schema
let User_dietSchema =new mongoose.Schema({
  

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },

    diet:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"diet"
    },
    
    isActive:{
        type:String  
    },

    assignDate:{
        type:String
    },

    revokeDate:{
        type:String
    }

})
//model

let User_dietModel = mongoose.model("user_diet",User_dietSchema)
module.exports =User_dietModel
