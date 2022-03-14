const WorkoutModel=require("../model/workout-model")

module.exports.addWorkout = function (req,res){
    //db insert workout

    let name = req.body.Name
    let description = req.body.description
    let user = req.body.user

    let workout=new WorkoutModel({
        name:name,
        description:description,
        user:user
    })

    workout.save(function(err,success){

        if(err){
            console.log(err,success);
            //sendMailtoDev(err);
            res.json({msg:"SMW",status:-1,data:req.body}) 
        
        }else{
            res.json({msg:"workout added",status:200,data:success})        
        }

    })

}

module.exports.getAllWorkouts=function(req,res){
    WorkoutModel.find(function(err,workouts){
        if(err){
            res.json({
                msg:"Something Went Wrong!!!",
                data:err,
                status:-1
            })
        }else{
            res.json({
                msg:"workouts set..",
                status:200,
                data:workouts

            })
        }
    })
}  

// /xyz
module.exports.deleteWorkout=function(req,res){
    let workoutId = req.params.workoutId

    //delete from workout where workoutId = 1
    WorkoutModel.deleteOne({"_id":workoutId},function(err,data){
        if(err){
            res.json({msg:"Something Went Wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:data})
        }
    })
}


module.exports.updateWorkout = function(req,res){

    //update workout set workoutName = admin where workoutId = 12121 
    let workoutId = req.body.workoutId 
    let workoutName = req.body.workoutName 

    WorkoutModel.updateOne({_id:workoutId},{workoutName:workoutName},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}

