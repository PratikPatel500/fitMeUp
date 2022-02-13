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

module.exports.login = login
module.exports.signup = signup
