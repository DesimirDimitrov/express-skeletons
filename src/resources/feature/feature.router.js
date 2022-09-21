const express = require("express");
const router = express.Router();
const { getFeature } = require('./feature.controller');

// Home page route.
router.get('/', getFeature);

module.exports = router;