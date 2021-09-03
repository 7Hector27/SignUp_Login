const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authMiddleware = require('./middleware');
const path = require('path');
const saltRounds = 10;
const fs = require('fs');
const User = require('../schema/userSchema');

router.post('/admin', async (req, res) => {
  const { name, email, password } = req.body;
  const hash = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, hash);
  try {
    const user = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });
    user.save();
    res.send('added user');
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
