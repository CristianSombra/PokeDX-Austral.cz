const express = require("express");
const router = require("./routes/routes.js")
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const corsOptions = {
    origin: '*',
    methods: 'GET',
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(router);

module.exports = app;