
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db'); // Mongoose connection
const articlesRoutes = require('./routes/articles');
const categoriesRoutes = require('./routes/categories');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/uploads', express.static('uploads')); // Serve uploaded images

app.use('/articles', articlesRoutes);
app.use('/categories', categoriesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
