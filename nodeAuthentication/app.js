const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const bodyParser =require('body-parser');

const app=express();

//database
const db=require('./config/keys').MongoURI;
//connect to mongo
mongoose.connect(db, {useNewUrlParser:true})
    .then(()=>console.log('MongodbConnected...'))
    .catch(err => console.log(err));

//EJS
app.use(expressLayouts);
app.set('view engine','ejs');

//Handling Images
app.use( express.static( "public" ) );

//bodyparser
app.use(express.urlencoded({ extended:false}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Handling Routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));



const PORT = process.env.PORT || 3000; 
app.listen(PORT,console.log(`server started on ${PORT}`));
