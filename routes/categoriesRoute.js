const express = require('express');
const router = express.Router();
const queries = require('../queries.js');
const CategoriesController = require('../controller/categoriesController.js');
const pool = queries.pool;

router.get('/category', CategoriesController.getAllCategories);
router.get('/category/:id', CategoriesController.getCategoryById);


module.exports = router;


