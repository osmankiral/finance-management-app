const Transaction = require('../models/Transaction');

// Yeni işlem oluştur
const createTransaction = async (req, res) => {
  const { description, amount, category } = req.body;

  try {
    const transaction = new Transaction({ description, amount, category, user: req.userId });
    await transaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: 'İşlem oluşturulurken hata oluştu' });
  }
};

// İşlemleri listele
const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.userId });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'İşlemler alınırken hata oluştu' });
  }
};

module.exports = { createTransaction, getTransactions };
