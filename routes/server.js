const express = require('express');
const router = express.Router();

const serverController = require('../controllers/server.controller');

router.get("/", serverController.getServers);

router.post("/", serverController.createServer);

router.delete("/delete/:_id", serverController.removeServer);

module.exports = router;