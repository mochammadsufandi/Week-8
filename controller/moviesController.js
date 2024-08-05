const { where } = require('sequelize');
const {Movies} = require('../models');
const { SELECT } = require('sequelize/lib/query-types');

class MoviesController {
    
    static async getAllMovies(req, res, next) {
        try {
           const movies = await Movies.findAll();

           if(!movies) throw({name : 'failedLoadMovies'});
            res.status(200).json({
                message : 'MASUKKK',
                data : movies
            })

        } catch (err) {
            next(err);
        }
    } 

    static async getMovieById(req, res, next) {
        try {
            const {id} = req.params;
            const movie = await Movies.findByPk(id);

            if(!movie) throw({name : 'failedLoadMovies'});
            res.status(200).json({
                message : 'MASUKKK',
                data : movie
            })
        } catch (err) {
            next(err);
        }
    }

    static async getMovieByCategoryId(req, res, next) {
        try {
            const {id} = req.params;
            const movie = await Movies.findAll({
                where : {
                    category_id : id
                },
            })
            res.status(200).json({
                message : 'MASUKKK',
                data : movie
            })
        } catch (err) {
            next(err);
        }
    }

    static async createMovie(req, res, next) {
        try {
            const {name, category_id, year} = req.body;
            const createdAt = new Date();
            const updatedAt = new Date();
            const movie = await Movies.create({
                name,
                category_id : +category_id,
                year : +year,
                createdAt,
                updatedAt
            })
            res.status(200).json({
                message : 'MASUKKK',
                data : movie
            })
            
        } catch (err) {
            next(err);
        }
    }
}

module.exports = MoviesController;