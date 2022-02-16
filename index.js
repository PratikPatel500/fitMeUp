const express = require("express") //mobile---accept json data from request and set data into body
const mongoose = require("mongoose")


const sessionController = require("./controller/session-controller") //web---accept url encoded
const roleController = require("./controller/role-controller")

const app = express()
//middle ware
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

//url
app.get("/", function (req, res) {
res.write("welcome...")
res.end()
})

app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup)
app.post("/saveuser",sessionController.saveuser)
app.post("/loginUser",sessionController.loginUser)


//role
app.post("/roles",roleController.addRole)

//server 

app.listen(3000, function () {
    console.log("server started on 3000");
})
