const Client = require("../models/Client");

exports.addClient = async(req,res,next)=>{
    try {
        const client = new Client(req.body);
        const newclient = await client.save();
        if(newclient){
            res.json({message: "The client was added"});
        }else{
            res.json({error: "The client couldn't be added"});
        }
    } catch (error) {
        res.json({error: "The client couldn't be added"});
    }
}
exports.editClient = async(req,res,next)=>{
    try {
        const {idClient} = req.params;
        const client = req.body;
        const newClient = await Client.findOneAndUpdate({_id:idClient},client,{new:true});

        if(newClient){
            res.json({message: "The client was edited"});
        }else{
            res.json({error: "The client couldn't be edited"});
        }
    } catch (error) {
        res.json({error: "The client couldn't be edited"});
    }
}
exports.findClient = async(req,res,next)=>{
    try {
        const {idClient} = req.params;
        const client = await Client.findOne({_id:idClient});
        res.json(client);
    } catch (error) {
        res.json({error: "Error while searching the client"});
    }
}
exports.deleteClient = async(req,res,next)=>{
    try {
        const {idClient} = req.params;
        const deleted = await Client.findOneAndDelete({_id:idClient});
        if(deleted){
            res.json({message: "The client was deleted"});
        }else{
            res.json({error: "The client couldn't be deleted"});
        }
    } catch (error) {
        res.json({error: "The client couldn't be deleted"});
    }
}
exports.allClients = async(req,res,next)=>{
    try {
        const clients = await Client.find();
        res.json(clients);
    } catch (error) {
        res.json({error: "Error while querying client list"});
    }
}