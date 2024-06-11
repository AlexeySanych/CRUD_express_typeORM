const express = require("express");
require('dotenv').config();
const userRouter = require("./userRouter");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/users', userRouter);
app.listen(process.env.PORT);