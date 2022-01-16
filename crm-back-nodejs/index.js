const express = require("express");
const router = require("./router/router");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
//Adding cors
app.use(cors());

//Connecting with db
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/clientsReact",{
    useNewUrlParser: true
});


//Adding body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const PORT = process.env.PORT || 1000;

app.use("/",(req,res,next)  =>{
    const totalURL = "http://"+req.hostname+":"+PORT+req.url
    console.log(req.method+": "+totalURL);
    next();
});
//Adding router
app.use("/", router);
app.listen(PORT, ()=>{
    console.log("Server runing in port: "+PORT);
});
