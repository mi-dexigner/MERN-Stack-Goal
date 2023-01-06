const express = require("express");
const colors = require('colors')
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db')
const port =  process.env.PORT || 5000;

connectDB()

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals',require('./routes/goalRoutes'));
app.use('/api/users',require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(port,()=>console.log(`Server started on port ${port}`))
// npm run server

// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});
