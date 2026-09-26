const users = require("../Models/userSchema");
const jwt = require("jsonwebtoken")

const bcrypt = require('bcryptjs')





// user registration



exports.registerUser = async (req, res) => {
    console.log("Inside user controller")
    console.log(req.body)
    

    const { name, flatnumber, email, mobilenumber, password, designation, role } = req.body;
    if (!role) {
        return res.status(400).json("Role missing in request")
    }
    try {
        const existingUser = await users.findOne({ email });
        if (existingUser) {
            return res.status(409).json("Account already exist")
        }
        const hashedpassword = await bcrypt.hash(password,10);
         
            
            const newUserData = {
                name,
                flatnumber,
                email,
                mobilenumber,
                password:hashedpassword,
                role,

            }

            if (role === "authority") {
                newUserData.designation = designation;
            }
            const newUser = new users(newUserData);
            await newUser.save();
            res.status(201).json(`${name} Registered successfully`)
        }
     catch (error) {
        console.log("Registration error", error)
        res.status(500).json("Registration failed")
    }



}

// user login

exports.loginUser = async (req, res) => {
    const { email, password, role } = req.body
    console.log("inside login", email, password)
    try {
        const existingUser = await users.findOne({ email: email,password:password})
        if(!existingUser){
            return res.status(404).json("User not found")
        }
        const isMatch = await bcrypt.compare(password,existingUser.password)
        if(!isMatch){
            return res.status(401).json('Incorrect password')
        }
    

        if (role !== existingUser.role){
            return res.status(403).json("Access Denied")
        }

       
    
                 const token = jwt.sign({ userId: existingUser._id, role: existingUser.role }, "creator")
            console.log(token);


           return res.status(200).json({
                user_data: existingUser,
                jwt_token: token,
                role: existingUser.role

            })
    



           
        
        
      



    }
    catch (error) {
        console.log(error)
        res.status(500).json("Login failled", error)

    }
}