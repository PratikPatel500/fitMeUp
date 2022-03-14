const Workout_planModel = require("../model/workout_plan-model")

module.exports.addWorkout_plan = function (req,res){
    //db insert workout_plan

    let user = req.body.user
    let workout = req.body.workout
    let workoutdate = req.body.workoutdate
    let workouttime = req.body.workouttime
    let isworkoutComplete = req.body.isworkoutComplete

    let workout_plan = new Workout_planModel({
        user:user,
        workout:workout,
        workoutdate:workoutdate, 
        workouttime:workouttime,
        isworkoutComplete:isworkoutComplete,
    })

    workout_plan.save(function(err,success){

        if(err){
            console.log(err,success);
            //sendMailtoDev(err);
            res.json({msg:"SMW",status:-1,data:req.body}) 
        }else{
            res.json({msg:"workout_plan added",status:200,data:success})        
        }
    })
}

module.exports.getAllWorkout_plans=function(req,res){
    Workout_planModel.find(function(err,data){
        if(err){
            res.json({msg:"Something Went Wrong!!!",data:err,status:-1})
        }else{
            res.json({msg:"workout_plans set..",status:200,data:data})
        }
    })
}  

// /xyz
module.exports.deleteWorkout_plan=function(req,res){
    let workout_planId = req.params.workout_planId

    //delete from workout_plan where workout_planId = 1
    Workout_planModel.deleteOne({"_id":workout_planId},function(err,data){
        if(err){
            res.json({msg:"Something Went Wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:data})
        }
    })
}


module.exports.updateWorkout_plan = function(req,res){

    //update workout_plan set workout_planName = admin where workout_planId = 32322
    let workout_planId = req.body.workout_planId 
    let workout_planName = req.body.workout_planName 

    Workout_planModel.updateOne({_id:workout_planId},{workout_planName:workout_planName},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}


