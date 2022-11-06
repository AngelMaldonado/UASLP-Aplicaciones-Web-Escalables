const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('/index.html', {root: __dirname});
});

router.get('/profile', (req, res) => {
    res.sendFile('/profile.html', {root: __dirname});
});

router.get('/login', (req, res) => {
    res.sendFile('/login.html', {root: __dirname});
});

app.use('/css', express.static(path.join('node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join('node_modules/bootstrap/dist/js')));
app.use('/img', express.static(path.join('img')));
app.use('/', router);
app.listen(3000);