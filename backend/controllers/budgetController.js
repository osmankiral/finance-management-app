const Budget = require('../models/Budget');

// Yeni bütçe oluştur
const createBudget = async (req, res) => {
  const { month, year, income, expense } = req.body;

  try {
    const budget = new Budget({ month, year, income, expense, user: req.userId });
    await budget.save();
    res.status(201).json(budget);
  } catch (error) {
    res.status(500).json({ message: 'Bütçe oluşturulurken hata oluştu' });
  }
};

// Bütçeleri listele
const getBudgets = async (req, res) => {
  try {
    const budgets = await Budget.find({ user: req.userId });
    res.status(200).json(budgets);
  } catch (error) {
    res.status(500).json({ message: 'Bütçeler alınırken hata oluştu' });
  }
};

module.exports = { createBudget, getBudgets };
