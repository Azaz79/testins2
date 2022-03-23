const express= require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var path = require('path');
const router = express.Router();
const User = require('./Models/User')
const { body, validationResult } = require('express-validator');
const fetchuser = require('./midleware/fetchuser');
const dotenv = require('dotenv');
dotenv.config()
const { cookie } = require('express/lib/response');


//Route 1:Create a user using POST /api/auth/createuser / no login require
router.use(express.static('public'));

router.post('/',[
    body('password').isLength({min: 5}),
], async (req, res)=>{
  //if there are errors then return a bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //find if a user already exist

    // let user = await User.findOne({email: req.body.email});
    // if(user){
    //   return res.status(400).json({error: "Sorry user with this email already exists"})
    // }
    try{
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt)
    user = await User.create({
      email: req.body.email,
      password: req.body.password,
      
    })
    const data = {
      user:{
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, process.env.JWT_SECRET)
    cookie("token",authtoken)
    res.json({authtoken})
  
  }catch(error){
    console.error(error.message);
    res.status(500).send("Internal server error");

  }

})

//Route 2: Authentication using for user login using POST /api/auth/login

router.post('/login',[
  body('email', "Enter a valid email").isEmail(),
  body('password', "Password cannot be blank").exists(),
  ], async (req, res)=>{

    //if there are errors then return a bad request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await User.findOne({email});
    if(!user){
    return res.status(400).json({error: "Please login with correct credentials"});
    }
    const passCompare = await bcrypt.compare(password, user.password);
    if(!passCompare){
      return res.status(400).json({error: "Please login with correct credentials"});
    }

    const data = {
      user:{
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, process.env.JWT_SECRET)
    res.json({authtoken})

  } catch(error){
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
})

//Route 3: Get loggedin user details using POST /api/auth/getuser ,login required
router.post('/getuser',fetchuser, async (req, res)=>{
  try {
    let userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user);
  } catch(error){
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
})

module.exports = router