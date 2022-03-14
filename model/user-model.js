const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    
    firstName:{
        type:String,
        required:true

    },

    lastName:{
        type:String,
        
    },
    
    dob:{
        type: Date
    },

    email:{
        type:String
    },

    password:{
        type:String,
        
    },

    gender:{
        type:String
    },

    contactNumber:{
        Types:String
    },

    role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"role"
    }, 
    otp:{
        type:String
    }


})

const UserModel = mongoose.model("user", UserSchema)
module.exports = UserModel
