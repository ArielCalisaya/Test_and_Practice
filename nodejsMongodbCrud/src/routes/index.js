const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('t_engine')
});

module.exports = router;