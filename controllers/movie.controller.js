const Movie = require('../models/movie.model');

const movieCtrl = {};

movieCtrl.addMovie = async (req, res) => {
    const myMovie = new Movie(req.body);
    await myMovie.save()
        .then(() => {
            res.json({message: 'Movie Successfully Inserted'})
        })
        .catch(err => res.send(err.message));
}

movieCtrl.getMovies = async (req,res) => {
    const movies = await Movie.find()
        .then((data) => res.json(data))
        .catch((err) => console.log(err));
}

movieCtrl.getMovie = async(req,res) =>{
    const movie = await Movie.findById(req.params.id)
        .then((data) => {
            if(data!=null) res.json(data)
            else res.json({message: 'Movie does not exist'})
        })
        .catch(err => console.log(err));
};

movieCtrl.updateMovie= async (req,res) =>{
    const movie= req.body;
    await Movie.findByIdAndUpdate(
        req.params.id,
        {$set: movie},
        {new: true}
    )
        .then((data) => {
            if(data!=null) res.json({message: 'Movie Succesfully Updated', data})
            else res.json({
                message: 'Movie does not exist'
            })
        })
        .catch(err => res.send(err.message));
};

movieCtrl.deleteMovie= async (req,res) =>{
    await Movie.findByIdAndDelete(req.params.id)
        .then((data) =>{
            if(data!=null) res.json({message: 'Movie Succesfully Deleted'})
            else res.json({message:'Movie does not exist'})
        })
        .catch(err => res.send(err.message));
};

movieCtrl.getGenres= async(req,res) =>{
    //el distinct nos saca solo una vez los resultados
    await Movie.find().distinct('genres')
        .then((data) => res.json(data))
        .catch((err) => console.error(err))
};

movieCtrl.getMovieName = async(req,res) =>{
                                //le pasamos el parametro por le que lo queramos buscar
    const movie= await Movie.find({title: req.params.name})
        .then((data)=>{
            if(data!=null) res.json(data)
            else res.json({message: 'Movie does not exist'})
        })
        .catch(err => console.log(err));
}

module.exports = movieCtrl;