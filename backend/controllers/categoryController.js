const Category = require('../models/Category');

// Yeni kategori oluştur
const createCategory = async (req, res) => {
  const { name, type } = req.body;

  try {
    const category = new Category({ name, type });
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: 'Kategori oluşturulurken hata oluştu' });
  }
};

// Kategorileri listele
const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Kategoriler alınırken hata oluştu' });
  }
};

module.exports = { createCategory, getCategories };
