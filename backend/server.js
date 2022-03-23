const express = require("express");
const dotenv = require('dotenv').config();
const port =  process.env.PORT || 5000;

const app = express();
app.use(express.json())
app.use('/api/goals',require('./routes/goalRoutes'));

// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

app.listen(port,()=>console.log(`Server started on port ${port}`))
// npm run server

