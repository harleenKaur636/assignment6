/********************************************************************************* 
*  WEB322 – Assignment 6 
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.   
*  No part of this assignment has been copied manually or electronically from any other source 
*  (including web sites) or distributed to other students. 
*  
*  Name: Harleen Kaur  Student ID: 163071210 Date: 12-12-2022
* 
*  Online (Cyclic) URL: 
* 
********************************************************************************/
var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
app.get("/", (req, res) => {
    res.send("Harleen - 163071210");
});
app.listen(HTTP_PORT);