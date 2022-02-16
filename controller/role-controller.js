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



