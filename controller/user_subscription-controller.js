const User_subscriptionModel=require("../model/user_subscription-model")

module.exports.addUser_subscription = function (req,res){
    //db insert user_subscription

        
    let user = req.body.user
    let subscription = req.body.subscription
    let pay = req.body.pay
    let subscribeDate = req.body.subscribeDate
    let paymentRefCode = req.body.paymentRefCode

    let user_subscription = new User_subscriptionModel({
        user:user,
        subscription:subscription,
        pay:pay, 
        subscribeDate:subscribeDate,
        paymentRefCode:paymentRefCode
        
    })



    user_subscription.save(function(err,success){

        if(err){
            console.log(err,success);
            //sendMailtoDev(err);
            res.json({msg:"SMW",status:-1,data:req.body}) 
        
        }else{
            res.json({msg:"user_subscription added",status:200,data:success})        
        }

    })

}

module.exports.getAllUser_subscriptions=function(req,res){
    User_subscriptionModel.find(function(err,user_subscriptions){
        if(err){
            res.json({
                msg:"Something Went Wrong!!!",
                data:err,
                status:-1
            })
        }else{
            res.json({
                msg:"user_subscriptions set..",
                status:200,
                data:user_subscriptions

            })
        }
    })
}  

// /xyz
module.exports.deleteUser_subscription=function(req,res){
    let user_subscriptionId = req.params.user_subscriptionId

    //delete from user_subscription where user_subscriptionId = 1
    User_subscriptionModel.deleteOne({"_id":user_subscriptionId},function(err,data){
        if(err){
            res.json({msg:"Something Went Wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:data})
        }
    })
}


module.exports.updateUser_subscription = function(req,res){

    //update user_subscription set user_subscriptionName = admin where user_subscriptionId = 12121 
    let user_subscriptionId = req.body.user_subscriptionId 
    let user_subscriptionName = req.body.user_subscriptionName 

    User_subscriptionModel.updateOne({_id:user_subscriptionId},{user_subscriptionName:user_subscriptionName},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}

