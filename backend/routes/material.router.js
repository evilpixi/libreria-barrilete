const express = require('express');
const materialController = require('../controllers/materials.ctrl');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('all the materials');
});

router.post('/', (req, res, next) => {
  res.send(materialController.addMaterial(req.body))
})

module.exports = router;
