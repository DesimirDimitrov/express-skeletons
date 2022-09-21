const express = require('express');
const app = express();
const { test } = require('./utils');

// Basic route
app.get('/', (req, res) => {
    res.json(test());
});

app.listen(3000, () => {
    console.log("Server started");
});