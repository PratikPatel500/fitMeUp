const bcrypt = require("bcrypt")
const UserModel = require("../model/user-model")


//add [ POST ]
module.exports.addUser = function (req, res) {

    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let dob = req.body.dob
    let email = req.body.email
    //encrypt 
    let password = req.body.password

    let encPassword = bcrypt.hashSync(password,10)
    let gender = req.body.gender
    let contactNumber = req.body.contactNumber
    let role = req.body.role


    
    let user = new UserModel({
        firstName: firstName,
        lastName:lastName,
        dob:dob,
        email: email,
        password: encPassword,
        gender:gender,
        contactNumber:contactNumber,
        role: role
    })



    user.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "signup done", data: data, status: 200 })//http status code 
        }
    })


}



//add [ POST ]
module.exports.addCustomer = function (req, res) {

    
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let email = req.body.email
    let password = req.body.password
    let dob = req.body.dob

    //encrypt 
    let encPassword = bcrypt.hashSync(password,10)

    let gender = req.body.gender
    let contactNumber = req.body.contactNumber
    
    let role = "622331da95dae66317def944"


    
    let user = new UserModel({
        firstName: firstName,
        lastName:lastName,
        dob:dob,
        email: email,
        password: encPassword,
        role: role,
        gender:gender,
        contactNumber:contactNumber

    })

    user.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "signup done", data: data, status: 200 })//http status code 
        }
    })


}

//list
module.exports.getAllUsers = function (req, res) {

    UserModel.find().populate("role").exec(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "users ret...", data: data, status: 200 })//http status code 
        }
    })
}


//delete
module.exports.deleteUser = function(req,res){
    //params userid 
    let userId = req.params.userId //postman -> userid 

    UserModel.deleteOne({_id:userId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user removed...", data: data, status: 200 })//http status code 
        }
    })
}


//update 
module.exports.updateUser  = function(req,res){
    let paramuserId = req.body.userId 
    let paramemail = req.body.email 
    let parampassword = req.body.password 

    UserModel.updateOne({_id:paramuserId},{email:paramemail,password:parampassword},function(err,data){
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user modified...", data: data, status: 200 })//http status code 
        }
    })

}


//login 
module.exports.login = function(req,res){

    let param_email = req.body.email
    let param_password  = req.body.password 

    let isCorrect = false; 

    UserModel.findOne({email:param_email}).populate("role").exec(function(err,data){
        if(data){
            let ans =  bcrypt.compareSync(param_password,data.password)
            if(ans == true){
                    isCorrect = true
            }
        }
    
        if (isCorrect == false) {
            res.json({ msg: "Invalid Credentials...", data: req.body, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Login....", data: data, status: 200 })//http status code 
        }
    })
} 



module.exports.disableUser = function (req, res) {
    let userId = req.body.userId
    // console.log(userId);
    UserModel.updateOne({ _id: userId }, { isActive: false, status: "Disable" }, function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "Data Retraive", status: 200, data: data })
        }
    })
}