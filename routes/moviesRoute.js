const express = require('express');
const router = express.Router();
const queries = require('../queries.js');
const MoviesController = require('../controller/moviesController.js');
const pool = queries.pool;


router.get('/movies', MoviesController.getAllMovies);
router.get('/movies/:id', MoviesController.getMovieById);
router.get('/moviesCategory/:id', MoviesController.getMovieByCategoryId);
router.post('/movies', MoviesController.createMovie);


module.exports = router;


