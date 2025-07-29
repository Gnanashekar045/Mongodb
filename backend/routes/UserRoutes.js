const express = require('express');
const router = express.Router();
const User = require('../models/User');

// CREATE
router.post('/', async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const newUser = await User.create({ name, email, age });
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ all
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// READ one
router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

// UPDATE
router.put('/:id', async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedUser);
});

// DELETE
router.delete('/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});

module.exports = router;
