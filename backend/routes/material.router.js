const express = require('express');
const materialService = require('../services/materials');
const router = express.Router();

router.get('/', (req, res, next) => {
  materialService.createNewMaterial({
    title: "faker.person.fullName",
    isbn: "faker.isbn",
    ubication: "faker.string.alphanumeric({ length: 2 })",
    edition: 3,
    stock: 1,
    used: true,
    price: 2.99
  })
});

router.post('/', (req, res, next) => {

})

module.exports = router;
