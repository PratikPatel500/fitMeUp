const mongoose=require("mongoose")
 
const UserSchema= new mongoose.Schema({
    FirstName : {
        type:String,
        required:true
    },
    Email : {
        type:"String"
    },
    password : {
        type:"String"
    },
    role : {
            type:mongoose.Schema.Types.ObjectId,
            ref:"role"
    }
})

const UserModel =mongoose.model("user",UserSchema)
module.exports = UserModel