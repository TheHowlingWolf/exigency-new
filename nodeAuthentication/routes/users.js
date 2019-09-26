const express = require('express');
const router = express.Router();

//login page
router.get('/login',(req,res)=>{
    res.render('login');
})

//login post
router.post('/login',(req,res)=>{
    console.log(req.body);
    res.send('hello');
});

//Register page
router.get('/register',(req,res)=>{
    res.render('register');
})

//Register Post Request
router.post('/register',(req,res)=>{
    console.log(req.body);
    res.send('Hello');
});



module.exports = router;