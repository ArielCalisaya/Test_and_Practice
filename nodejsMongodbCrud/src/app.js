const path = require('path')
const express = require('express');
const morgan = require('morgan')
const mongoose = require('mongoose');

const app = express();

// importing Routes
const indexRoute = require('./routes/index')

// first connection db
mongoose.connect('mongodb://localhost/mongo-crud', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(db => console.log('DB conected'))
    .catch(err => console.log(err))
    


// settings
app.set('port', process.env.PORT || 3200);

// |--> Template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



// routes
app.use('/', indexRoute);

// middleware
app.use(morgan('dev'));

app.use(express
    .urlencoded(
        {
            extended: false
        }
    ));

// start server
app.listen(app.get('port'), () => {
    console.log(`Running on port: ${app.get('port')}`)
})