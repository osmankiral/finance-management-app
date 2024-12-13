const express = require('express');
const { createBudget, getBudgets } = require('../controllers/budgetController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createBudget);
router.get('/', authMiddleware, getBudgets);

module.exports = router;
