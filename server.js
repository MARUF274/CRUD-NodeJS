
const express = require('express');
const bodyParser = require('body-parser');
const route = require('./app/routes/router');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}))


app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({ 
        "massage": "Welcome Master, how are you today?" });
});
app.use(route)
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

const dbConfig = require('./app/config/config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Welcome Master, how are you today?");
}).catch(err => {
    console.log('Cant recognize Master');
    process.exit();
});