var express = require("express");
var cors = require("cors");
var webApp = require("../Controllers/webAppController");
var router = express.Router();

router.use(cors());

// Displays the service purposes' configuration page
router.get("/purposes", webApp.displayPurposes);

module.exports = router;
