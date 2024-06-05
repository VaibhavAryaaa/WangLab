const express = require("express");
const { body, validationResult } = require("express-validator");
const History = require("../db/history")
const router = express.Router();

router.post("/",
[
  body("name").notEmpty().withMessage("Name is required"),
  body("date").notEmpty().withMessage("Date is required"),
  body("time").notEmpty().withMessage("Time is required"),
  body("equipment").notEmpty().withMessage("Equipment is required"),
],

async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const history = new History({
      name: req.body.name,
      date: req.body.date,
      time: req.body.time,
      equipment: req.body.equipment,
    });

   const newhist = await history.save();
    res.json(newhist);
}
)
module.exports = router;