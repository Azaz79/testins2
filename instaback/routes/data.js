const express = require('express');
const fetchuser = require('../midleware/fetchuser');
// const Notes = require('../Models/Data');
const Informs = require('../Models/Data');
const User = require('../Models/User')
const Product = require('../Models/BuySell')
const Tools = require('../Models/BuySell')
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


router.get('/instagram/login', async (req,res)=>{
    //    const Pdoctor = await db.collection('Pdoctor').find({});
    
       const doctors = await Informs.find({});
        //    console.log(Pdoctors);
           res.render(path.join(__dirname,'../../public/views/index'),{
           doctorlist: doctors
           
        })        
    })
router.get('/login', async (req,res)=>{
    //    const Pdoctor = await db.collection('Pdoctor').find({});
    
       const Pdoctors = await Informs.find({});
        //    console.log(Pdoctors);
           res.render('login',{
           doctorlist: Pdoctors
        }) 
        
        
    })
router.get('/signup', async (req,res)=>{
    //    const Pdoctor = await db.collection('Pdoctor').find({});
    
       const Pdoctors = await Informs.find({});
        //    console.log(Pdoctors);
           res.render('signup',{
           doctorlist: Pdoctors
        }) 
        
        
    })
router.get('/signup/registration', async (req,res)=>{
    //    const Pdoctor = await db.collection('Pdoctor').find({});
    
       const Pdoctors = await Informs.find({});
        //    console.log(Pdoctors);
           res.render('persninfo',{
           doctorlist: Pdoctors
        }) 
        
        
    })
router.get('/about', async (req,res)=>{
    //    const Pdoctor = await db.collection('Pdoctor').find({});
    
    //    const Pdoctors = await Informs.find({});
        //    console.log(Pdoctors);
           res.render('about',{
        //    doctorlist: Pdoctors
        }) 
    })
router.get('/contact', async (req,res)=>{
    //    const Pdoctor = await db.collection('Pdoctor').find({});
    
    //    const Pdoctors = await Informs.find({});
        //    console.log(Pdoctors);
           res.render('contact',{
        //    doctorlist: Pdoctors
        }) 
        
        
    })
router.get('/blogs', async (req,res)=>{
    //    const Pdoctor = await db.collection('Pdoctor').find({});
    
    //    const Pdoctors = await Informs.find({});
    //        console.log(Pdoctors);
           res.render('blog',{
        //    doctorlist: Pdoctors
        }) 
    })
router.get('/doctors', async (req,res)=>{
    //    const Pdoctor = await db.collection('Pdoctor').find({});
    
       const Pdoctor = await Informs.find({});
           res.render('doctors',{
           doctorlist: Pdoctor
        }) 
    })
router.get('/search/doctors/:sp', async (req,res)=>{
    //    const Pdoctor = await db.collection('Pdoctor').find({});
    
       const doctors = await Informs.find({sp: req.params.sp});
           res.render('results',{
           doctorlist: doctors
        }) 
    })
router.get('/products', async (req,res)=>{
    //    const Pdoctor = await db.collection('Pdoctor').find({});
    
       const product = await Product.find({});
           res.render('product',{
           toolist: product
        }) 
    })

//Route 2:Add data using POST /api/signup/registration , login require
router.post('/signup/registration', fetchuser, [
    body('email').isEmail(),
], async (req, res) => {

    try {
        // const {fname,lname,email,phone,contact,sex,address,pstate,pcity,pzip,qinfo,ug,uginst,ugyear,pg,pginst,pgyear,sp,ssp,city,zip } = req.body;
        let doct = await Informs.findOne({user: req.user.id});
        if(doct){
        return res.status(400).json({error: "Sorry you only once fill details with this email"})
        }
        //if there are errors then return a bad request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let info = new Informs({
        img : {
            data: fs.readFileSync(path.join("C://Users/DELL/Pictures/" + req.body.img)),
            contentType: 'image/png'
            },
        fname : req.body.fname,
        lname : req.body.lname,
        email : req.body.email,
        phone : req.body.phone,
        contact : req.body.contact,
        sex : req.body.sex,
        address : req.body.address,
        pstate : req.body.pstate,
        pcity : req.body.pcity,
        pzip : req.body.pzip,
        qinfo : req.body.qinfo,
        ug : req.body.ug,
        uginst : req.body.uginst,
        ugyear : req.body.ugyear,
        pg : req.body.pg,
        pginst : req.body.pginst,
        pgyear : req.body.pgyear,
        sp : req.body.sp,
        ssp : req.body.ssp,
        city : req.body.city,
        zip : req.body.zip, 
        user: req.user.id
        })
        const saveddata = await info.save();
        res.json(saveddata)
    }catch(error){
        console.error(error.message);
        res.status(500).send("Internal server error");
    
    }
})


router.post('/sell/product_details', fetchuser, [
    body('email').isEmail(),
], async (req, res) => {

    try {
        // const {fname,lname,email,phone,contact,sex,address,pstate,pcity,pzip,qinfo,ug,uginst,ugyear,pg,pginst,pgyear,sp,ssp,city,zip } = req.body;
        // let tools = await Tools.findOne({user: req.user.id});
        // if(tools){
        // return res.status(400).json({error: "Sorry you only once fill details with this email"})
        // }
        //if there are errors then return a bad request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let tool = new Tools({
        img : {
            data: fs.readFileSync(path.join("C://Users/DELL/Pictures/" + req.body.img)),
            contentType: 'image/png'
            },
        name : req.body.tname,
        price : req.body.price,
        email : req.body.email,
        phone : req.body.phone, 
        description : req.body.tdesc, 
        state : req.body.state, 
        city : req.body.city, 
        user: req.user.id
        })
        const saveddata = await tool.save();
        res.json(saveddata)
    }catch(error){
        console.error(error.message);
        res.status(500).send("Internal server error");
    
    }
})
//Route 3: Update a existing notes using PUT /api/notes/updatenotes , login require
router.put('/updatedata/:id', fetchuser, async (req, res) => {
    const {name, description, sp} = req.body;
    //create a newNote object
    const newNote = {};
    if(name){newNote.name = name};
    if(description){newNote.description = description};
    if(sp){newNote.sp = sp};

    //find the note to be updated and update it 
    let note = await Notes.findById(req.params.id);
    if(!note){return res.status(404).send("Not found")}

    if(note.user.toString() !== req.user.id){
        return res.status(401).send("Not allowed")
    }
    note = await Notes.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true})
    res.json({note});
})

//Route 3: Delete a existing notes using DELETE /api/notes/deletenote , login require
router.delete('/deletedata/:id', fetchuser, async (req, res) => {

    //find the note to be updated and update it 
    let note = await Notes.findById(req.params.id);
    if(!note){return res.status(404).send("Note found")}

    if(note.user.toString() !== req.user.id){
        return res.status(401).send("Not allowed")
    }
    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({"Success": "Note has been deleted", note: note});
})
module.exports = router