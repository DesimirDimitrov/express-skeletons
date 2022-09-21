const express = require('express');
const app = express();
const router = express.Router();
const { test } = require('../utils');
const featureRouter = require('./resources/feature/feature.router');

app.use('/feature', featureRouter);


app.listen(3000, () => {
    console.log("Server started");
});