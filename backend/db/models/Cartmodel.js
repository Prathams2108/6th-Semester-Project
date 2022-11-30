const mongoose = require("mongoose");

const cartschema = new mongoose.Schema({
    username: {
        type:String,
        require:true,
    },
    productname: {
        type:String,
        require:true,
    },
    productcost: {
        type:String,
        require:true,
    },
});

module.exports = CartModel = mongoose.model("cart_details", cartschema);