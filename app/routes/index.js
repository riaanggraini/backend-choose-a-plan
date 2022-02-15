const express = require('express');
const router = express.Router();
const authRoutes = require('./auth.route');
const planRoutes = require('./plan.route');

authRoutes(router);
planRoutes(router);

module.exports = router;