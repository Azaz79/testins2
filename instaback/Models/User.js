const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
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
         require: true,
         unique: true
     },
     password:{
         type: String,
         require: true
     },
     img:{
         data: Buffer,
         contentType: String
     },
     date:{
         type: Date,
         default: Date.now
     }
   });
const User = mongoose.model('user99clinics', UserSchema);
User.createCollection();
module.exports = User;