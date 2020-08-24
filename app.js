const express = require("express");
const app = express();
require("dotenv").config({ path: "./config/config.env" });
require("./config/connectDB")();

app.use(express.json({ extended: true }));

app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("App has been started..."));
