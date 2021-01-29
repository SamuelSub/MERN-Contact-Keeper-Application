const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { check, validationResult } = require('express-validator/check');


// @route   POST api/users
// @desc    Register a user
// @access  Public

router.post('/', [
  check('name', 'Please add a name')
    .not()
    .isEmpty(),
  check('email', 'Please enter valid email').isEmail(),
  check('password', 'Please enter a password with a minimum of 6 charachters').isLength( { min: 6 } )
],(req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  } else {
    res.send('passed')
  }
});

module.exports = router;