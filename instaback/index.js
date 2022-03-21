const connectedToMongo = require('./db');
const express = require('express')
var ejs = require("ejs")
const bodyParser = require('body-parser');
connectedToMongo();

const app = express()

app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.static('../public'))
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get('/',(req, res) => {
//   try {
//       res.redirect('index');
      
//   } catch(error){
//       console.error(error.message);
//       res.status(500).send("Internal server error");
//     }
// })
app.use('/api/auth', require('./routes/auth'))
app.use('/', require('./routes/data'))

app.listen(5000, () => {
  console.log('99clinics backend listening at https://instas.netlify.app')
})