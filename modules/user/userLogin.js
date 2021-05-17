const User = require("./Model");

function userLogin(req, res){
    const userEmail = req.body.email;
    const userPassword = req.body.password;

    User.findOne({ email: userEmail, password: userPassword})
        .exec()
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({message: "Login error"});
        })
}

module.exports = userLogin;