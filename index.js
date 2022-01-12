'use strict'
const express = require("express")

/**
 * @constants
 * @setHostAt "0.0.0.0" instead or localhost
 */
const HOST = "0.0.0.0";
const PORT = 8485;

const app = express();

/**
 * @fetchOldData from the previous session
*/
app.get("/", async (req, res) => {
    res.send('This is exercise 1, to build custom image named "simple_exercise" expose using -p 9393:8485')
});

/** 
* @listen 
*/
app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});