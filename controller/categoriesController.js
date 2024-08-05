const {Categories} = require('../models')

class CategoriesController {
    
    static async getAllCategories(req, res, next) {
        try {
           const categories = await Categories.findAll();

           if(!categories) throw({name : 'failedLoadCategories'});
            res.status(200).json({
                message : 'MASUKKK',
                data : categories
            })

        } catch (err) {
            next(err);
        }
    } 

    static async getCategoryById(req, res, next) {
        try {
            const {id} = req.params;
            const category = await Categories.findByPk(id);

            if(!category) throw({name : 'failedLoadCategories'});
            res.status(200).json({
                message : 'MASUKKK',
                data : category
            })
        } catch (err) {
            next(err);
        }
    }

    
}

module.exports = CategoriesController;