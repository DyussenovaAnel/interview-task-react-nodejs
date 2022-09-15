const express = require("express");
const router = express.Router();
const db = require("../../db/index");
const Song = require("../../models/Song");

router.get("/", async (req, res) => {
    try {
        const [songs, _] = await Song.findAll();
        res.status(200).json({ count: songs.length, songs });

      } catch (error) {
        res.send(error);
      } 
});

module.exports = router;