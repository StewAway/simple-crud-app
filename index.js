const express = require('express');
const app = express();
const mongoose = require('mongoose');


app.listen(3000, () => {   console.log('Server is running on http://localhost:3000');});

app.get('/', (req, res) => {
    res.send("Hello from NODE api server");
});


mongoose.connect("mongodb+srv://manhtuphamho:zbdeEEnqfy1TGJl6@simpledb.1h1mgeq.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Simpledb")
.then(() => {
    console.log("Connected to database!");
})
.catch(() => {
    console.log("Connection failed!");
});