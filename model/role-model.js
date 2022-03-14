const mongoose = require("mongoose")

//schema
let RoleSchema =new mongoose.Schema({
    roleName:{
        type:String
    }
})


//model

let RoleModel = mongoose.model("role",RoleSchema)
module.exports = RoleModel

// //schema

// let RoleSchema =newmongoose.Scchema({
//     roleName:{
//         type:String
//     },
//     roleDescription:{
//         type:String,
//         required:true,
//         }
//     }
// })
