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


//list

module.exports.getAllUsers = function(req,res){

    UserModel.find().populate("role").exec(function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",data:err,status:-1})
        }else{
            res.json({msg:"Users Return....",data:data,status:200})
        }   
    })
}


//delete
module.exports.deleteUser = function(req,res){
    //params userid
    let userId = req.params.userId //postman---> userId
    UserModel.deleteOne({_id:userId},function(err,data){
        if(err){
                res.json({msg:"Something went wrong!!!",data:err,status:-1})
            }else{
                res.json({msg:"user Removed....",data:data,status:200})
            }
        })
}


// //update
// module.exports.addUser=function(req,res){
    
// }
