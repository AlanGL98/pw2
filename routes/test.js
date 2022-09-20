'use strict'

var express = require('express');
var testController = require('../controllers/test');

var router = express.Router();

// Rutas de prueba
router.post('/datos-curso', testController.datosCurso);
router.get('/test-controlador', testController.test);

// Rutas utiles
// router.post('/save', ArticleController.save);
// router.get('/articles/:last?', ArticleController.getArticles);
// router.get('/article/:id', ArticleController.getArticle);
// router.put('/article/:id', ArticleController.update);
// router.delete('/article/:id', ArticleController.delete);
// router.post('/upload-image/:id', md_upload, ArticleController.upload);
// router.get('/get-image/:image', ArticleController.getImage);
// router.get('/search/:search', ArticleController.search);

module.exports = router;