const express = require("express");
// const dotenv = require("dotenv").config();
const app = express();
const errorHandler = require("./Middlewear/errorHandler");
const port = process.env.PORT || "8888";

//create a port to listen for
app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
//MIDDLEWARE app.use()
//Parse data from client to server in JSON form
app.use(express.json());

app.use("/api/contact", require("./routes/contactRoute"));
app.use(errorHandler);
