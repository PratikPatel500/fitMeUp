const User_dietModel=require("../model/user_diet-model")

module.exports.addUser_diet = function (req,res){
    //db insert user_diet

    let user = req.body.user
    let diet = req.body.diet
    let isActive = req.body.isActive
    let assignDate = req.body.assignDate
    let revokeDate = req.body.revokeDate

    let user_diet = new User_dietModel({
        user:user,
        diet:diet,
        isActive:isActive,
        assignDate:assignDate,
        revokeDate:revokeDate
        
    })

    user_diet.save(function(err,success){

        if(err){
            console.log(err,success);
            //sendMailtoDev(err);
            res.json({msg:"SMW",status:-1,data:req.body}) 
        
        }else{
            res.json({msg:"user_diet added",status:200,data:success})        
        }

    })

}

module.exports.getAllUser_diets=function(req,res){
    User_dietModel.find(function(err,user_diets){
        if(err){
            res.json({
                msg:"Something Went Wrong!!!",
                data:err,
                status:-1
            })
        }else{
            res.json({
                msg:"user_diets set..",
                status:200,
                data:user_diets

            })
        }
    })
}  

// /xyz
module.exports.deleteUser_diet=function(req,res){
    let user_dietId = req.params.user_dietId

    //delete from user_diet where user_dietId = 1
    User_dietModel.deleteOne({"_id":user_dietId},function(err,data){
        if(err){
            res.json({msg:"Something Went Wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:data})
        }
    })
}


module.exports.updateUser_diet = function(req,res){

    //update user_diet set user_dietName = admin where user_dietId = 12121 
    let user_dietId = req.body.user_dietId 
    let user_dietName = req.body.user_dietName 

    User_dietModel.updateOne({_id:user_dietId},{user_dietName:user_dietName},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}

