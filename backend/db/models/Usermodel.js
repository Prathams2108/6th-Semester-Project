const mongoose= require("mongoose");

const userSchema= new mongoose.Schema({
    name:String,
    mobile:Number,
    address:String,
    email:String,
    username:String,
    password:String,
    dob:Date,
    dl:String
});

module.exports=mongoose.model("user_details", userSchema);