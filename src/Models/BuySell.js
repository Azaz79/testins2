const mongoose = require('mongoose');
const { Schema } = mongoose;

const ToolSchema = new Schema({
     user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
     },
     img:{
       data: Buffer,
       contentType: String
     },
     name:{
            type: String,
         require: true
     },
     price:{
            type: Number,
         require: true
     },
     contact:{
            type: String,
         require: true
     },
     state:{
            type: String,
        require: true
     },
     city:{
            type: String
     },
     date:{
         type: Date,
         default: Date.now
     }
   });

module.exports = mongoose.model('99tool', ToolSchema);