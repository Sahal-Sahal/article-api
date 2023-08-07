// routes/articles.js
const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../middleware/multer'); // Import the multer middleware

const {
    createArticle,
    getAllArticles,
    getArticlesByCategory,
    getArticlesByMultipleCategories,
    editArticle,
    removeArticle
} = require('../controllers/articles');

router.post('/create',uploadMiddleware.any(), (req, res, next) => {
    if (req.files) {
        req.body.imagePath = req.files[0].path;
    } else {
        return res.status(400).json({ error: 'Invalid file' });
    }
    next();
  }, createArticle);

router.get('/list-articles', getAllArticles);
// Route to list articles by a single category
router.get('/category/:categoryId', getArticlesByCategory);

// Route to list articles by multiple categories
router.get('/categories/:categoryIds', getArticlesByMultipleCategories)

router.put('/edit-article/:articleId', editArticle);

router.delete('/remove-article/:articleId', removeArticle);


module.exports = router;
