require('dotenv').config();
const express = require ('express');
const mongoose = require ('mongoose');
const routes = require('./routes');

const mongoString ="mongodb+srv://param071998:WPTeDR44gh5twD15@cluster0.e6vscnw.mongodb.net";
//  process.env.DATABASE_URL;
const app = express();

app.use(express.json());

app.use('/api',routes);

mongoose.connect(mongoString);
const database = mongoose.connection;
database.on('error',err=>{
console.log(err);
});
database.on('connected',()=>console.log('database connected'));




app.listen(3000,()=>{
  console.log("server started at localhost:3000");
})