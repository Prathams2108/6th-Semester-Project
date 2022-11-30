const mongoose = require("mongoose");
const orderschema = new mongoose.Schema({
    orderid: {
        type: Number
    },
    username: {
        type: String
    },
    shippingaddress: {
        type: String,
    },
    ordereditems:{
        type: String
    },
    ordertotal: {
        type: Number
    },
    deliverydate: {
        type: String
    },
    orderstatus: {
        type: String
    }
})

module.exports = OrderModel = mongoose.model("order_details", orderschema);