const express = require("express");
const app = express();

app.use(express.json());
require("./db/history")
const User = require("./db/config");

var cors = require('cors') 
app.use(cors())
app.use("/", require("./routes/storehist"))
app.use("/", require("./routes/gethist"))
app.listen(5000, () => {
    console.log("server started on 5000 port");
  });