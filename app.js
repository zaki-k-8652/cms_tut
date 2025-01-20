const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Configure Mongoose to MongoDB
mongoose.connect('mongodb://localhost:27017/cms_tut')
    .then(response => {
        console.log("MongoDB Connected!");
    })
    .catch(err => {
        console.log("MongoDB connection failed!", err);
    });


// Configure Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', (req, res) => {
    res.send("Welcome to MMANTC cms")
});

app.listen(3000,() =>{
    console.log("Server started on port 3000");
});
