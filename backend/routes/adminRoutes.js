// adminRoutes.js
const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/me', authMiddleware, (req, res) => {
  // Kullanıcı bilgilerini req.user'dan alıyoruz
  if (req.user) {
    res.json(req.user); // Admin bilgilerini burada gönderiyoruz
  } else {
    res.status(400).json({ message: 'Kullanıcı bilgileri bulunamadı' });
  }
});

module.exports = router;
