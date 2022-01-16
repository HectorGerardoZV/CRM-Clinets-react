const express = require("express");
const router = express.Router();

//Controllers
const clientController = require("../controllers/ClientController");

router.get("/clients",clientController.allClients);
router.post("/clients",clientController.addClient);
router.put("/clients/:idClient",clientController.editClient);
router.delete("/clients/:idClient",clientController.deleteClient);
router.get("/clients/:idClient",clientController.findClient);



module.exports = router;