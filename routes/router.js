const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/", controller.getIndex);
router.get("/portfolio", controller.getPortfolio);
router.get("/about", controller.getAbout);
router.get("/contact", controller.getContact);
router.post("/contact", controller.postContact);

module.exports = router;
