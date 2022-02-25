const { status } = require("express/lib/response");
const { off } = require("../model/role-model");
const RoleModel=require("../model/role-model")

module.exports.addRole = function (req,res){
    //db insert role
    console.log(req.body.roleName);
    let role=new RoleModel({
        roleName:req.body.roleName
    })

    role.save(function(err,success){

        if(err){
            console.log(err,success);
            //sendMailtoDev(err);
            res.json({msg:"SMW",status:-1,data:req.body}) 
        
        }else{
            res.json({msg:"role added",status:200,data:success})        
        }

    })

}

module.exports.getAllRoles=function(req,res){
    RoleModel.find(function(err,roles){
        if(err){
            res.json({
                msg:"Something Went Wrong!!!",
                data:err,
                status:-1
            })
        }else{
            res.json({
                msg:"roles set..",
                status:200,
                data:roles

            })
        }
    })
}  

// /xyz
module.exports.deleteRole=function(req,res){
    let roleId = req.params.roleId

    //delete from role where roleId = 1
    RoleModel.deleteOne({"_id":roleId},function(err,data){
        if(err){
            res.json({msg:"Something Went Wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:data})
        }
    })
}


module.exports.updateRole = function(req,res){

    //update role set roleName = admin where roleId = 12121 
    let roleId = req.body.roleId 
    let roleName = req.body.roleName 

    RoleModel.updateOne({_id:roleId},{roleName:roleName},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}






//roleId pk--Auto increment 
//roleName==***


// function addRole(req,res){
// }
// module.exports.addRole=addRole



// modele.exports.updateRole=function (req,res){

// }

// module.exports.deleteRole=function (req,res){

// }

// module.exports.getAllRole=function (req,res){

// }

// module.exports.getRoleId=function (req,res){
    
// }



