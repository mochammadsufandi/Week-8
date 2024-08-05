const errorHandler = async(err, req, res, next) => {
    console.log(err);
    switch (err.name) {
        case 'failedLoadMovies' : 
            return res.status(404).json({message : 'Movies is Not Found'})
        case 'failedLoadCategories' : 
            return res.status(404).json({message : 'Categories is Not Found'})
        default : 
            return res.status(500).json({message : 'Internal Server Error'})
    }
}

module.exports = errorHandler;