const { createHash } = require('node:crypto');

const User = require('../models/User');

// GET /api/users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error getting users:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// POST /api/users
exports.createUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const hashedPassword = createHash('sha256').update(password).digest('hex')
    const newUser = new User({
      username,
      password: hashedPassword,
      email
    });
    const user = await newUser.save();
    res.json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Server error' });
  }
};