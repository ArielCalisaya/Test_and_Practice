const express = require('express');
const router = express.Router();

const Todo = require('../models/todos');

router.get('/', (req, res) => {
    res.render('to-do')
});

router.post('/add', (req, res) => {
    console.log(req.body);
    res.send('Recivido')
})

module.exports = router;

// something is goind wrong req.body == undefined