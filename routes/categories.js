// routes/categories.js
const express = require('express');
const router = express.Router();

const {
  createCategory, listCategories,
} = require('../controllers/categories');

router.post('/create', createCategory);

router.get('/list', listCategories);

module.exports = router;
