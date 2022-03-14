const SubscriptionModel=require("../model/subscription-model")

module.exports.addSubscription = function (req,res){
    //db insert subscription

    let title = req.body.title
    let duration = req.body.duration
    let offer = req.body.offer
    let offerDescription = req.body.offerDescription
    let price = req.body.price


    let subscription = new SubscriptionModel({
        title:title,
        duration:duration,
        offer:offer,
        offerDescription:offerDescription,
        price:price
        
    })

    subscription.save(function(err,success){

        if(err){
            console.log(err,success);
            //sendMailtoDev(err);
            res.json({msg:"SMW",status:-1,data:req.body}) 
        
        }else{
            res.json({msg:"subscription added",status:200,data:success})        
        }
    })
}

module.exports.getAllSubscriptions=function(req,res){
    SubscriptionModel.find(function(err,subscriptions){
        if(err){
            res.json({
                msg:"Something Went Wrong!!!",
                data:err,
                status:-1
            })
        }else{
            res.json({
                msg:"subscriptions set..",
                status:200,
                data:subscriptions

            })
        }
    })
}  

// /xyz
module.exports.deleteSubscription=function(req,res){
    let subscriptionId = req.params.subscriptionId

    //delete from subscription where subscriptionId = 1
    SubscriptionModel.deleteOne({"_id":subscriptionId},function(err,data){
        if(err){
            res.json({msg:"Something Went Wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:data})
        }
    })
}


module.exports.updateSubscription = function(req,res){

    //update subscription set subscriptionName = admin where subscriptionId = 12121 
    let subscriptionId = req.body.subscriptionId 
    let subscriptionName = req.body.subscriptionName 

    SubscriptionModel.updateOne({_id:subscriptionId},{subscriptionName:subscriptionName},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}

