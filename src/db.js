const mongoose = require('mongoose');
const mongoURI = `mongodb://localhost:27017/Tagala?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`;

const connectedToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to mongo Successfully");
    })
}

module.exports = connectedToMongo;