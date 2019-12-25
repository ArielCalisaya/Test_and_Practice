const express = require('express');
const morgan = require('morgan');
app = express();

// Settings
app.set('port', 5000)


// Middlewares
app.use(express.json());
app.use(morgan('dev'))


app.get('/', (req, res) => {
    res.json({
        'username': 'ArielC',
        'password': 'pzm2010',
    })
})

app.post('/user/:id', (req, res) => {
    console.log(req.body, req.params);
    res.send('<h1>Content Posted</h1>')
})

app.put('/user/:id', (req, res) => {
    res.send(`User ${req.params.id} updated`)
})

app.delete('/test/:publicId', (req, res) => {
    res.send(`User ${req.params.publicId} has been deleted`)
})


app.listen(app.get('port'), () => {
    console.log(`Running on Port:`, app.get('port'))  
})