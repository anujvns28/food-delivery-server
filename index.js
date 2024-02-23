const express = require("express");
const { dbConnect } = require("./config/database");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

//data base connection
dbConnect();

app.listen(PORT , () => {
    console.log("server started successfully")
})


