const express = require("express");
const app = express();
require("dotenv").config({ path: "./config/config.env" });
require("./config/connectDB")();

app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("App has been started..."));
