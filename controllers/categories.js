
const Category = require('../models/Category');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const category = new Category({
      name
    });

    await category.save();

    res.status(201).json({ error: false, message: "Created Sucessfully", data: category });
  } catch (error) {
    res.status(500).json({ error: true, message: 'Failed to create Category', data: {} });
  }
};

const listCategories = async (req, res) => {
  try {
    const categories = await Category.find({}, {__v: 0 });
    res.status(201).json({ error: false, message: "Categories", data: categories });
  } catch (error) {
    res.status(500).json({ error: true, message: 'Failed to fetch categories', data: {} });
  }
};


module.exports = {
  createCategory,
  listCategories
};
