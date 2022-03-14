const mongoose = require("mongoose")

//schema
let User_subscriptionSchema =new mongoose.Schema({

    
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    
    subscription:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"subscription"
    },
    
    pay:{
        type:String  
    },

    subscribeDate:{
        type:String  
    },

    paymentRefCode:{
        type:String
    },


})


//model

let User_subscriptionModel = mongoose.model("user_subscription",User_subscriptionSchema)
module.exports =User_subscriptionModel
