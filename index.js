const express = require("express") //mobile---accept json data from request and set data into body
const mongoose = require("mongoose")
const cors = require("cors")

const sessionController = require("./controller/session-controller") //web---accept url encoded
const roleController = require("./controller/role-controller")
const userController = require("./controller/user-controller")
const dietController = require("./controller/diet-controller")
const user_dietController = require("./controller/user_diet-controller")
const subscriptionController = require("./controller/subscription-controller")
const user_subscriptionController = require("./controller/user_subscription-controller")
const user_measurementController = require("./controller/user_measurement-controller")
const workoutController = require("./controller/workout-controller")
const workout_PlanController = require("./controller/workout_plan-controller")





const app = express()
//middle ware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//database
mongoose.connect('mongodb://localhost:27017/fitMeUp',function(err){
    if(err){
        console.log("db connection failed")
        console.log(err);
    }else{
        console.log("db connected");
    }
    })

//urls 

app.get("/",function(req,res){
    res.write("welcome...")
    res.end()
})

          
app.get("/login",sessionController.login) //dummy 
app.get("/signup",sessionController.signup) //dummy
app.post("/sendotpforpassword",sessionController.sendOtpForPassword)

//role 
app.post("/roles",roleController.addRole)//customer admin etc..
app.get("/roles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRole)
app.put("/roles",roleController.updateRole)
app.get("/roles/:roleId",roleController.getRoleById)


//user 
app.post("/users",userController.addUser) //customer vendor admin 
app.get("/users",userController.getAllUsers)
app.delete("/users/:userId",userController.deleteUser)
app.put("/users",userController.updateUser)
app.post("/login",userController.login)

app.post("/savecustomer",userController.addCustomer) //signup  -- customer 
 



//usermeasurement
app.post("/user_measurements",user_measurementController.addUser_measurement)
app.get("/user_measurements",user_measurementController.getAllUser_measurements)
app.delete("/user_measurements/:usermeasurementId",user_measurementController.deleteUser_measurement)
app.put("/user_measurements",user_measurementController.updateUser_measurement)

//subscription
app.post("/subscriptions",subscriptionController.addSubscription)
app.get("/subscriptions",subscriptionController.getAllSubscriptions)
app.delete("/subscriptions/:subscriptionId",subscriptionController.deleteSubscription)
app.put("/subscriptions",subscriptionController.updateSubscription)


//user_subscription
app.post("/user_subscriptions",user_subscriptionController.addUser_subscription)
app.get("/user_subscriptions",user_subscriptionController.getAllUser_subscriptions)
app.delete("/user_subscriptions/:user_subscriptionId",user_subscriptionController.deleteUser_subscription)
app.put("/user_subscriptions",user_subscriptionController.updateUser_subscription)

//diet
app.post("/diets",dietController.addDiet)
app.get("/diets",dietController.getAllDiets)
app.delete("/diets/:dietId",dietController.deleteDiet)
app.put("/diets",dietController.updateDiet)

//user_diet
app.post("/user_diets",user_dietController.addUser_diet)
app.get("/user_diets",user_dietController.getAllUser_diets)
app.delete("/user_diets/:user_dietId",user_dietController.deleteUser_diet)
app.put("/user_diets",user_dietController.updateUser_diet)

//Workout
app.post("/workouts",workoutController.addWorkout)
app.get("/workouts",workoutController.getAllWorkouts)
app.delete("/workouts/:workoutId",workoutController.deleteWorkout)
app.put("/workouts",workoutController.updateWorkout)

//Workout_Plan
app.post("/workout_Plans",workout_PlanController.addWorkout_plan)
app.get("/workout_Plans",workout_PlanController.getAllWorkout_plans)
app.delete("/workout_Plans/:workout_PlanId",workout_PlanController.deleteWorkout_plan)
app.put("/workout_Plans",workout_PlanController.updateWorkout_plan)











//server 
app.listen(3000, function () {
    console.log("server started on 3000");
})


