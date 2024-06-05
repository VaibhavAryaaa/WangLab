const express = require("express");
const { body, validationResult } = require("express-validator");
const History = require("../db/history")
const router = express.Router();

router.get("/",async (req, res) => {
    try {
      const history = await History.find();
      res.json(history);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  });
module.exports = router;