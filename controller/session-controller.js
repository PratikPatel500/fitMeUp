const nodemailer=require("nodemailer")
const fs=require("fs")
const UserModel = require("../model/user-model")
const bcrypt = require("bcrypt")


function login(req, res) {
    res.write("login")
    res.end()
}


function signup(req, res) {
    let signuphtml=fs.readFileSync("./views/Signup.html")
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


function sendOtpForPassword(req,res){
    let emailParam  = req.body.email 
    UserModel.find({email:emailParam},function(err,data){
        if(err){
            res.json({status:-1,msg:"SMW",data:err})
        }else{
            if(data.length != 0){
                let myotp = parseInt(Math.random()*1000000)
                UserModel.updateOne({email:emailParam},{otp:myotp},function(err,success){



                    //mail send
                    let transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: 'patelpratik5678567@gmail.com',
                            pass: 'wsshruxisblibkgj'
                        }
                    });
                      
                    let mailDetails = {
                        from: 'patelpratik5678567@gmail.com',
                        to: emailParam,
                        subject: 'OTP for reset Password',
                        text: 'Hey Your OTP for Reset Password is : '+myotp
                    };
                      
                    transporter.sendMail(mailDetails, function(err, data) {
                        if(err) {
                            console.log('Error Occurs');
                            res.json({status:-1,msg:"SMW : Email sent ",data:""})
                        } else {
                            console.log('Email sent successfully');
                            res.json({status:200,msg:"otp sent to your email",data:""})
                        }
                })           
            })
            }else{
                res.json({status:-1,msg:"Invalid Email",data:err})
            }
        }
    })            
}

//post email passwrd otp
function updatePasswordWithOtp(req, res) {
    let emailParam = req.body.email
    let passwordParam = req.body.password
    let otpParam = req.body.otp

    UserModel.findOne({ email: emailParam }, function (err, user) {
        
        if (user) {
            //otp
        
            if (user.otp == otpParam) {
                //password encrypted
                    let encPass = bcrypt.hashSync(passwordParam, 10)
                    UserModel.updateOne({ email: emailParam }, { OTP: "", password: encPass}, function (err, data) {
                    if (err) {
                        console.log(err);
                        res.json({ status: -1, msg: "SMW", data: err })
                    }else {
                        res.json({ status: 200, msg: "Password Updated", data: "Password Updated" })
                    }
                })

            }else {
                res.json({ status: -1, msg: "Invalid Otp", data: "err" })
            }
        }
    })

}
    

module.exports.login = login
module.exports.signup = signup
module.exports.saveuser = saveUser
module.exports.sendOtpForPassword = sendOtpForPassword
module.exports.updatePasswordWithOtp = updatePasswordWithOtp