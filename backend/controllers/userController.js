const User = require('../models/User');

// Mevcut kullanıcıyı al
const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Kullanıcı verisi alınırken hata oluştu' });
  }
};

module.exports = { getMe };
