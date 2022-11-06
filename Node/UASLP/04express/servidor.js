const express = require('express');
const app = express();
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time', Date.now());
    next();
});
// define the homepage route
router.get('/', (req, res) => {
    res.send('Birds home page');
});
// define the about route
router.get('/about', (req, res) => {
    res.send('About birds');
});

app.use('/', router);
app.listen(3000);