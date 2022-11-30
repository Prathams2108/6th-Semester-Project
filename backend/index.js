const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const fs = require('fs')
require("./db/config");
const User= require("./db/models/Usermodel");
const Product = require("./db/models/Productmodel")
const Service = require("./db/models/Servicemodel")
const Customize = require("./db/models/Customizemodel")
const Orders = require("./db/models/OrdersModel")
const Cart = require("./db/models/Cartmodel")
const app = express();

app.use(express.json());
app.use(cors())
app.post("/register", async(req, resp)=>{
    let user= new User(req.body);
    let result = await user.save()
    result = result.toObject();
    delete result.password
    resp.send(result)
})

app.post("/login", async (req,resp)=>{
    const {username, password} = req.body;
    let user = await User.findOne(req.body).select("-password");
    if(user){
    resp.send(user);
    } else {
        resp.send({error: "Invalid Details"});
    }
})

//storage
const storage = multer.diskStorage ({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer ({ storage: storage});



app.post("/addproducts", upload.single('productimage'), (req, res) => {
    const saveProduct = Product({
        productid: req.body.productid,
        productname: req.body.productname,
        productcost: req.body.productcost,
        productAvailability: req.body.productAvailability,
        productdescription: req.body.productdescription,
        productimage: req.body.productimage
    }); 
    saveProduct
    .save()
    .then((res) => {
        console.log("Product Has Been Added");
    })
    .catch((err) => {
        console.log(err, "Error Has Occurred");
    });
    res.send('Product Is Saved')
        
});

app.get("/products", async (req,resp)=>{
    const products = await Product.find();
    if(products.length>0) {
        resp.send(products)
    }else {
        resp.send({result: "No Product Found"})
    }
    
})

app.get("/products/:id",async(req,res) => {
    let result = await Product.findOne({_id:req.params.id});
    if(result){
        res.send(result);
    }else{
        res.send({result:"No record Found."})
    }
})

app.post("/addservice", (req, res) => {
    const saveService = Service({
        serviceid: req.body.serviceid,
        servicename: req.body.servicename,
        servicecost: req.body.servicecost,
        serviceavailability: req.body.serviceavailability,
        servicedescription: req.body.servicedescription,
        serviceimage: req.body.serviceimage,
    }); 
    saveService
    .save()
    .then((res) => {
        console.log("Service Has Been Added");
    })
    .catch((err) => {
        console.log(err, "Error Has Occurred");
    });
    res.send('Service Is Saved')
        
});

app.get("/service", async (req,resp)=>{
    const services = await Service.find();
    if(services.length>0) {
        resp.send(services)
    }else {
        resp.send({result: "No Product Found"})
    }
    
})

app.get("/service/:id",async(req,res) => {
    let result = await Service.findOne({_id:req.params.id});
    if(result){
        res.send(result);
    }else{
        res.send({result:"No record Found."})
    }
})

app.get("/customproducts", async (req,resp)=>{
    const c_products = await Customize.find();
    if(c_products.length>0) {
        resp.send(c_products)
    }else {
        resp.send({result: "No Product Found"})
    }
    
})

app.get("/customproducts/:id",async(req,res) => {
    let result = await Customize.findOne({_id:req.params.id});
    if(result){
        res.send(result);
    }else{
        res.send({result:"No record Found."})
    }
})

app.post("/addcustomize", (req, res) => {
    const saveCustomize = Customize({
        customid: req.body.customid,
        customname: req.body.customname,
        customcost: req.body.customcost,
        customavailability: req.body.customavailability,
        customdescription: req.body.customdescription,
        customimage: req.body.customimage,
    }); 
    saveCustomize
    .save()
    .then((res) => {
        console.log("Customization Products Has Been Added");
    })
    .catch((err) => {
        console.log(err, "Error Has Occurred");
    });
    res.send('Customization Products Is Saved')
        
});

app.put("/product/:productid", async (req,resp)=>{
    let result = await Product.updateOne(
        {productid:req.params.productid},
        {$set:req.body}
        )
        resp.send(result);
})

app.post("/addorder", async(req, resp) =>{
    let order= new Orders(req.body);
    let result = await order.save()
    result = result.toObject();
    delete result.password
    resp.send(result)
})

app.get("/orders", async (req,resp)=>{
    const orders = await Orders.find();
    if(orders.length>0) {
        resp.send(orders)
    }else {
        resp.send({result: "No Order Found"})
    }
    
})


app.listen(5000);