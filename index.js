const express = require("express")
const sessionController = require("./controller/session-controller")

const app = express()

app.get("/", function (req, res) {
res.write("welcome...")
res.end()
})

app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup)

app.listen(3000, function () {
    console.log("server started on 3000");
})
