const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('to-do')
});

router.post('/add', (req, res) => {
    console.log(req.body);
    res.send('Recived')
})

module.exports = router;