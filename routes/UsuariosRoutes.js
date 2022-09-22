'use strict'

var express = require('express');
var UsuariosController = require('../controllers/UsuariosController');

var router = express.Router();

// Rutas utiles
router.get('/usuarios', UsuariosController.getUsuarios);
router.post('/usuarios', UsuariosController.createUsuarios);
router.patch('/usuarios/:id', UsuariosController.updateUsuarios);
router.delete('/usuarios/:id', UsuariosController.deleteUsuarios);
// router.post('/save', ArticleController.save);
// router.get('/articles/:last?', ArticleController.getArticles);
// router.get('/article/:id', ArticleController.getArticle);
// router.put('/article/:id', ArticleController.update);
// router.delete('/article/:id', ArticleController.delete);
// router.post('/upload-image/:id', md_upload, ArticleController.upload);
// router.get('/get-image/:image', ArticleController.getImage);
// router.get('/search/:search', ArticleController.search);

module.exports = router;