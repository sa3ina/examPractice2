const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
var cors = require("cors");
app.use(cors());
const router = require("./routes/Route");
app.use("/", router);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
require("./config/db");
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
