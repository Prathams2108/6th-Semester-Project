const mongoose = require("mongoose");

const serviceschema = new mongoose.Schema({
    serviceid: {
        type: Number,
        unique: true,
    },
    servicename: {
        type: String,
    },
    servicedescription: {
        type: String,
    },
    serviceavailability:{
        type: String,
    },
    servicecost: {
        type: Number,
    },
    serviceimage: {
        type: String,
    }
})

module.exports = ServiceModel = mongoose.model("service_details", serviceschema);