const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/product.js');


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes
app.use("/api/product", require('./routes/product.js'));


//connect database
mongoose.connect("mongodb+srv://manhtuphamho:zbdeEEnqfy1TGJl6@simpledb.1h1mgeq.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Simpledb")
.then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {   console.log('Server is running on http://localhost:3000');});
})
.catch(() => {
    console.log("Connection failed!");
});