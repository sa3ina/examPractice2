const Controller = require("../controller/Controller");
const express = require("express");
const router = express.Router();
router.get("/posts", Controller.getall);
router.get("/posts/:id", Controller.getbyId);
router.delete("/posts/:id", Controller.deletebyId);
router.post("/posts", Controller.postNew);

module.exports = router;
