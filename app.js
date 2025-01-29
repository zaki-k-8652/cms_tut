const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const { engine } = require('express-handlebars');
const { mongoDbUrl } = require('./config/configuration');
const app = express();

mongoose.connect(mongoDbUrl)
    .then(response => {
        console.log("MongoDB Connected!");
    }).catch(err => {
        console.log("MongoDB connection failed!", err);
    });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', engine({ defaultLayout: 'default' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Route
const defaultRoutes = require('./routes/defaultRoutes');
app.use('/', defaultRoutes);
//app.use('/admin/', adminRoutes);

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
