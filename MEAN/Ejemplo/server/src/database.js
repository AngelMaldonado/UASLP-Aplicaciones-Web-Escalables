const mongoose  = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mean-employees', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(db => console.log('db is connected'))
    .catch(err => console.log(err));