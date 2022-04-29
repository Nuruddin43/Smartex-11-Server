const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();
// middleware
app.use(cors());
app.use(express.json());

// dbUser2
// VUGT7qvCngBNBFvi

app.get("/", (req, res) => {
  res.send("Running smartEx warehouse");
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
