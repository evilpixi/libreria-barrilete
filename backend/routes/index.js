const express = require('express');
const materialRouter = require("./material.router")

const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/materials', materialRouter);

module.exports = router;
