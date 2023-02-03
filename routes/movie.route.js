const express = require('express');
const movieCtrl = require('../controllers/movie.controller');
const router = express.Router();

//END POINTS
router.get('/', movieCtrl.getMovies);
router.get('/movie/:id', movieCtrl.getMovie);
router.post('/', movieCtrl.addMovie);
router.put('/:id', movieCtrl.updateMovie);
router.delete('/:id', movieCtrl.deleteMovie);
//le ponemos endpoinds distintos para que sepa a lo que nos referimos pasandole el nombre
router.get('/moviename/:name', movieCtrl.getMovieName);
router.get('/genres', movieCtrl.getGenres);


module.exports = router;