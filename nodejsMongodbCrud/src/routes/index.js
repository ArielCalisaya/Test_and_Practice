const express = require('express');
const router = express.Router();

const Todo = require('../model/todo-model');

router.get('/', (req, res) => {
    res.render('index')
});

router.post('/agregar', (req, res) => {
    console.log(req.body);
    
    res.send('Recivido')
})

module.exports = router;

// something is going wrong req.body == undefined