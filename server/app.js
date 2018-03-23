const path = require('path');
const express = require('express');
const app = express();

const publicPath = path.join(__dirname, '..', '/public');

// Static Files Middleware
app.use(express.static(path.join(__dirname, 'public')));

// View Engine Middleware
app.set('views', path.join(__dirname, '..', '/views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

// Listen to Server
const port = 3000;
app.listen(port, () => { console.log(`Now listening to Port:${port}`) });