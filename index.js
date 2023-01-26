require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const { homePageRouter } = require('./src/routes/home/homePageRouter.router');
const { searchRouter } = require('./src/routes/search/searchRouter.router');
const errorhandler = require('errorhandler');

const app = express();

app.use(errorhandler());
app.use(morgan('dev'));

app.get('/', (_, res) => res.json({
  status: 'pass',
  time: new Date()
}));

app.use('/home', homePageRouter());
app.use('/search', searchRouter());
app.use('/', (_, res) => {
  res.status(400);
  res.end();
});

app.listen(process.env.PORT, () => {
  console.log(`Started listening at ${process.env.HOST}:${process.env.PORT}`);
});
