const express = require("express")
const sessionController = require("./controller/session-controller")

const app = express()
//middle ware
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/", function (req, res) {
res.write("welcome...")
res.end()
})

app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup)
app .post("/saveuser",sessionController.saveuser)


app.listen(3000, function () {
    console.log("server started on 3000");
})
