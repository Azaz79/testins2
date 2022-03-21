const mongoose = require('mongoose');
const { Schema } = mongoose;

const InfoSchema = new Schema({
     user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
     },
     img:{
       data: Buffer,
       contentType: String
     },
     fname:{
            type: String,
         require: true
     },
     lname:{
            type: String,
         require: true
     },
     email:{
            type: String,
         require: true
     },
     phone:{
            type: String,
         require: true
     },
     contact:{
            type: String,
         require: true
     },
     sex:{
            type: String,
         require: true
     },
     address:{
            type: String,
        require: true
     },
     pstate:{
            type: String,
        require: true
     },
     pcity:{
            type: String,
        require: true
     },
     pzip:{
            type: String,
        require: true
     },
     qinfo:{
            type: String,
        require: true
     },
     ug:{
            type: String,
        require: true
     },
     uginst:{
            type: String,
        require: true
     },
     ugyear:{
            type: String,
        require: true
     },
     pg:{
            type: String,
        require: true
     },
     pginst:{
            type: String,
        require: true
     },
     pgyear:{
            type: String,
        require: true
     },
     sp:{
            type: String,
        require: true
     },
     ssp:{
            type: String,
        require: true
     },
     city:{
            type: String
     },
     zip:{
            type: String
     },
     date:{
         type: Date,
         default: Date.now
     }
   });

module.exports = mongoose.model('99doctor', InfoSchema);