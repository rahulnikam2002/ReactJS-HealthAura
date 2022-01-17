const db = require("../../db/db");
const { hashSync, compareSync, genSaltSync } = require("bcrypt")
const { sign } = require("jsonwebtoken")


exports.signupUser = (req, res) => {
    const { userName, userEmail, userPassword, userCity } = req.body;
    const salt = genSaltSync(10);
    const hashedPassword = hashSync(userPassword, salt);

    // Checking whether user had already registered or not;
    db.query("select * from healthaura_users where userEmail = ?", [userEmail], (err, data) => {
        if (err) {
            console.log("err while getting data from db...");
        }
        else if (data.length > 0) {
            res.send({
                msg: "User already exist, try to login",
                code: 0
            }).status(400)
            console.log("User already exist, try to login");
        }
        else {
            db.query("insert into healthaura_users set userEmail = ?, userName = ?, userCity = ?, userPassword = ?", [userEmail, userName, userCity, hashedPassword], (err, data) => {
                if (err) {
                    console.log("err while adding data into db...");
                }
                else{
                    console.log("User Registered...")
                    const userAuthToken = sign({userEmail: userEmail}, process.env.secret_key, {
                        expiresIn: '24h'
                    })

                    res.cookie("userAuthToken", userAuthToken, {
                        expires: new Date(Date.now() + 86400000)
                    })

                    res.send({
                        msg: "User registered successfully",
                        token: userAuthToken,
                        code: 1
                    })
                }
            })
        }
    })
}