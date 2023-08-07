// models/Article.js
const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  heading: String,
  readTime: String,
  description: String,
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
  imagePath: String,
  isVerified: Boolean,
  isNewest: Boolean,
  isTrending: Boolean
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
