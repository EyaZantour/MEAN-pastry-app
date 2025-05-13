module.exports = app => {
    const router = require('express').Router();
    const articleController= require('../controllers/article.controller');
    router.post('/articles', articleController.create);
    router.get('/articles', articleController.findAll);
    router.delete('/articles/:id', articleController.delete);
    router.get('/articles/:id', articleController.findOne);
    router.put('/articles/:id', articleController.update);

    app.use('/api/',router);
    }

    