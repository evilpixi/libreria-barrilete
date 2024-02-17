const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('all the materials');
});

module.exports = router;
