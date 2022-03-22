const express = require("express");
const dotenv = require('dotenv').config();
const port =  process.env.PORT || 5000;

const app = express();
app.get('/',(req,res)=>{
    res.send("We are on Home")
})

// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

app.listen(port,()=>console.log(`Server started on port ${port}`))
// npm run server
