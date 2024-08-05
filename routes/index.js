const express = require('express');
const router = express.Router();
const moviesRoute = require('./moviesRoute');
const categoryRoute = require('./categoriesRoute');


router.use("/api", moviesRoute);
router.use("/api", categoryRoute);

module.exports = router;