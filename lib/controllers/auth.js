const { Router } = require('express');
const User = require('../models/User');

module.exports = Router()
  .post('/signup', (req, res, next) => {
    User
      .insert(req.body)
      .then(user => res.send(user))
      .catch(next);
  })

  .post('/login', (req, res, next) => {
    User
      .findByEmail(req.body)
      .then(user => res.send(user))
      .catch(next);
  });