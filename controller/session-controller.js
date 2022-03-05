const fs=require("fs")

function login(req, res) {
    let loginhtml=fs.readFileSync("./views/login.html")
    res.write(loginhtml)
    res.end()
}


function signup(req, res) {
    let signuphtml=fs.readFileSync("./views/signup.html")
    res.write(signuphtml)
    res.end()
}

function saveUser(req,res) {
    
    console.log(req.body)

    res.json({
        msg:"Done ....Done",
        status:200,
        data:req.body
    })

}



function loginUser(req,res) {
     
    console.log(req.body)

    res.json({
        msg:"Done login ....Done",
        status:200,
        data:req.body
    })

    res.write("data saved")
    res.end()
}
module.exports.login = login
module.exports.signup = signup
module.exports.saveuser = saveUser
module.exports.loginUser= loginUser