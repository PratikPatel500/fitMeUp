const DietModel=require("../model/diet-model")

module.exports.addDiet = function (req,res){
    //db insert diet
    
    let title = req.body.title
    let description = req.body.description
    let user = req.body.user

    let diet = new DietModel({
        title:title,
        description:description,
        user:user 
        
    })

    diet.save(function(err,success){

        if(err){
            console.log(err,success);
            //sendMailtoDev(err);
            res.json({msg:"SMW",status:-1,data:req.body}) 
        }else{
            res.json({msg:"diet added",status:200,data:success})        
        }
    })
}

module.exports.getAllDiets=function(req,res){
    DietModel.find(function(err,data){
        if(err){
            res.json({msg:"Something Went Wrong!!!",data:err,status:-1})
        }else{
            res.json({msg:"diets set..",status:200,data:data})
        }
    })
}  

// /xyz
module.exports.deleteDiet=function(req,res){
    let dietId = req.params.dietId

    //delete from diet where dietId = 1
    DietModel.deleteOne({"_id":dietId},function(err,data){
        if(err){
            res.json({msg:"Something Went Wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:data})
        }
    })
}


module.exports.updateDiet = function(req,res){

    //update diet set dietName = admin where dietId = 32322
    let dietId = req.body.dietId 
    let dietName = req.body.dietName 

    DietModel.updateOne({_id:dietId},{dietName:dietName},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}


