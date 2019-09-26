const mongoose =require('mongoose');

const UserSchema = new mongoose.Schema({
    Fname:{
        type:String,
        required:true
    },
    Lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:String,
        default: Date.now
    }
});

const User= mongoose.model('User',UserSchema);
module.exports = User;