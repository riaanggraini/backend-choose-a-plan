const express = require('express');
const router = express.Router();
const authRoutes = require('./auth.route');

authRoutes(router);

module.exports = router;