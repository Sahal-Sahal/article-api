
const Article = require('../models/Article');

const createArticle = async (req, res) => {
    try {
        
        const { heading, readTime, description, categories, isVerified, isNewest, isTrending, imagePath } = req.body;

      
        const categoriesArray = JSON.parse(categories)

        const article = new Article({
            heading,
            readTime,
            description,
            categories:categoriesArray,
            imagePath,
            isVerified,
            isNewest,
            isTrending
        });

        await article.save();

        res.status(201).json({ error: false, message: "Created Sucessfully", data: article });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: true, message: 'Failed to create article', data: {} });
    }
};


//get All articles

const getAllArticles = async (req, res) => {
    try {
        const articles = await Article.find().populate('categories'); 
        res.status(200).json({ error: false, message: "Article list", data: articles });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: true, message: 'Failed to fetch articles' });
    }
};


const getArticlesByCategory = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const articles = await Article.find({ categories: categoryId }).populate('categories');

        res.status(200).json({ error: false, message: 'Articles', data: articles });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: true, message: 'Failed to fetch articles' });
    }
};

const getArticlesByMultipleCategories = async (req, res) => {
    try {
        const categoryIds = req.params.categoryIds.split(','); // Split the category IDs by commas
        const articles = await Article.find({ categories: { $in: categoryIds } }).populate('categories');

        res.status(200).json({ error: false, message: 'Articles', data: articles });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: true, message: 'Failed to fetch articles' });
    }
};

const editArticle = async (req, res) => {
    try {
        const articleId = req.params.articleId;
        const { heading, readTime, description, categories, isVerified, isNewest, isTrending } = req.body;

        const updatedArticle = await Article.findByIdAndUpdate(
            {_id:articleId},
            {
                heading,
                readTime,
                description,
                categories,
                isVerified,
                isNewest,
                isTrending,
            },
            { new: true } 
        ).populate('categories');

        if (!updatedArticle) {
            return res.status(404).json({ error: true, message: 'Article not found' });
        }

        res.status(200).json({ error: false, message: "Article updated successfully", data: updatedArticle });
    } catch (error) {
        console.error(error);
        res.status(500).json({ eror: true, message: 'Failed to edit article' });
    }
};

const removeArticle = async (req, res) => {
    try {
        const articleId = req.params.articleId;

        const removedArticle = await Article.findByIdAndRemove(articleId);

        if (!removedArticle) {
            return res.status(404).json({ error: true, message: 'Article not found' });
        }

        res.status(200).json({ error: false, message: 'Article removed successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: true, message: 'Failed to remove article' });
    }
};

module.exports = {
    createArticle,
    getAllArticles,
    getArticlesByCategory,
    getArticlesByMultipleCategories,
    editArticle,
    removeArticle
};
