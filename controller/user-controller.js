const UserModel=require("../model/user-model")

//add
module.exports.addUser=function(req,res){
    let firstName = req.body.firstName
    let email = req.body.email
    let password = req.body.password
    let role = req.body.role

    let user= new UserModel({
        firstName : firstName,
        email : email,
        password : password,
        role : role

    })

    
    user.save(function(err,data){
        if(err){
                res.json({msg:"Something went wrong!!!",data:err,status:-1})
            }else{
                res.json({msg:"Signup Done....",data:data,status:200})
            }
        })
}


// //list
// module.exports.addUser=function(req,res){
    
// }


// //delete
// module.exports.addUser=function(req,res){
    
// }


// //update
// module.exports.addUser=function(req,res){
    
// }
