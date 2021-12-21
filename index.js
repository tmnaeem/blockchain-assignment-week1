'use strict'
const express = require("express")
require("dotenv").config();
require("./db/mongoose")

/**
 * @constants
 * @setHostAt "0.0.0.0" instead or localhost
*/
const HOST = "0.0.0.0";
const PORT = 8484;

const app = express();

app.get("/", (req, res) => {
    res.send("This is a basic node server");
});


/**
 * @listen 
*/
app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});