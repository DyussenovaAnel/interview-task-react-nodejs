const express = require("express");
const router = express.Router();

router.use("/", require("./Songs/GetSongs"));

module.exports = router;