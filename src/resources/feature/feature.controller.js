const config = require("../../config.js");

const getFeature = function (req, res) {
    res.send(config.secret);
};

module.exports = { getFeature }