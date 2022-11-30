const mongoose = require("mongoose");

const customizeschema = new mongoose.Schema({
    customid: {
        type: Number,
        required: true,
        unique: true,
    },
    customname: {
        type: String,
        require: true,
    },
    customdescription: {
        type: String,
        require: true,
    },
    customavailability:{
        type: String,
        require: true,
    },
    customcost: {
        type: Number,
        require: true,
    },
    customimage: {
        type:String,
    }
})

module.exports = CustomModel = mongoose.model("customize_details", customizeschema);