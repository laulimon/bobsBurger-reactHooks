const db = require('./db/db');
const express = require('express');
const session = require('express-session')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const app = express()
const Router = require("./routes/index")

app.use(express.static(__dirname + "/public"))
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use(cookieParser());
app.use(session({
    secret: "burger",
    resave: false,
    saveUninitialized: false
}));

app.use(function (err, req, res, next) {
    console.error(err);
    res.status(err.status || 500).send(err.message);
});

app.use("/", Router)

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/public/' + 'index.html')
})

db.sync({
    logging: false,
    force: false

})
    .then(function () {
        app.listen(8000, function () {
            console.log('Server is listening on port 8000!');
        });
    })
    .catch(console.error)

