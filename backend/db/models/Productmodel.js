const mongoose = require("mongoose");
const productschema = new mongoose.Schema({
    productid: {
        type: Number,
        unique: true
    },
    productname: String,
    productcost: Number,
    productAvailability: String,
    productdescription: String,
    productimage:String
});

module.exports = ProductModel = mongoose.model("product_details", productschema);