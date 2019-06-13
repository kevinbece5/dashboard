const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const routes = require('./routes');

mongoose.connect('mongodb://localhost:27017/dashboard');
mongoose.set('useFindAndModify', false);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

app.use(session({
    secret: "dashboard session",
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
        mongooseConnection: db
    })
}));

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', routes);
app.use('/', express.static(path.resolve(__dirname, '../dist/')));
app.use('/login', express.static(path.resolve(__dirname, '../dist/')));
app.use('/signUp', express.static(path.resolve(__dirname, '../dist/')));
app.use('/profile', express.static(path.resolve(__dirname, '../dist/')));
app.use('/profiles', express.static(path.resolve(__dirname, '../dist/')));


app.listen(port, () => {
    console.log(`running on port ${port}`)
})