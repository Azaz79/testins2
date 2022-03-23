const express = require('express');
const fetchuser = require('./midleware/fetchuser');
// const Notes = require('../Models/Data');
const Informs = require('./Models/Data');
const User = require('./Models/User')
const Product = require('./Models/BuySell')
const Tools = require('./Models/BuySell')
const { body, validationResult } = require('express-validator');
const router = express.Router();
var path = require('path');
var fs = require('fs');


//Route 1:Get All notes using GET /api/notes/fechallnotes , login require
// router.get('/doctors', async (req, res) => {
//     try {
//         const notes = await Notes.find({ user: req.user.id });
//         res.json(notes)
        
//     } catch(error){
//         console.error(error.message);
//         res.status(500).send("Internal server error");
//       }
// })


router.get('/', async (req,res)=>{
    //    const Pdoctor = await db.collection('Pdoctor').find({});
    
    //    const doctors = await Informs.find({});
        //    console.log(Pdoctors);
        // console.log(__dirname);

           res.render(path.join(__dirname, '../../../dist/views/home'))        
    })

module.exports = router