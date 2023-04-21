const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/:ropa1/products/:ropa2', (req, res) => {
    const {ropa1, ropa2} = req.params;
    res.json({
        ropa1,
        ropa2,
    });
})

module.exports = router;