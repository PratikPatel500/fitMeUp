const User_measurementModel=require("../model/user_measurement-model")

module.exports.addUser_measurement = function (req,res){
    //db insert user_measurement

        
    let user = req.body.user
    let height = req.body.height
    let weight = req.body.weight
    let bmi = req.body.bmi
    let measurementDate = req.body.measurementDate
    let measurnmentByduration = req.body.measurnmentByduration

    let user_measurement = new User_measurementModel({
        user:user,
        height:height,
        weight:weight, 
        bmi:bmi,
        measurementDate:measurementDate,
        measurnmentByduration:measurnmentByduration,
    })



    user_measurement.save(function(err,success){

        if(err){
            console.log(err,success);
            //sendMailtoDev(err);
            res.json({msg:"SMW",status:-1,data:req.body}) 
        
        }else{
            res.json({msg:"user_measurement added",status:200,data:success})        
        }

    })

}

module.exports.getAllUser_measurements=function(req,res){
    User_measurementModel.find(function(err,user_measurements){
        if(err){
            res.json({
                msg:"Something Went Wrong!!!",
                data:err,
                status:-1
            })
        }else{
            res.json({
                msg:"user_measurements set..",
                status:200,
                data:user_measurements

            })
        }
    })
}  

// /xyz
module.exports.deleteUser_measurement=function(req,res){
    let user_measurementId = req.params.user_measurementId

    //delete from user_measurement where user_measurementId = 1
    User_measurementModel.deleteOne({"_id":user_measurementId},function(err,data){
        if(err){
            res.json({msg:"Something Went Wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:data})
        }
    })
}


module.exports.updateUser_measurement = function(req,res){

    //update user_measurement set user_measurementName = admin where user_measurementId = 12121 
    let user_measurementId = req.body.user_measurementId 
    let user_measurementName = req.body.user_measurementName 

    User_measurementModel.updateOne({_id:user_measurementId},{user_measurementName:user_measurementName},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}

