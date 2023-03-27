require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const errorhandler = require('errorhandler');
const cors = require('cors');
const { homePageRouter } = require('./src/routes/homePageRouter.router');
const { detailPageRouter } = require('./src/routes/detailPageRouter.router');
const { initiateRedis } = require('./src/redis/redis');
const { searchRouter } = require('./src/routes/search/searchRouter.router');

const app = express();
initiateRedis();

app.use(cors());
app.use(errorhandler());
app.use(morgan('dev'));

app.get('/', (_, res) => res.json({
  status: 'pass',
  time: new Date()
}));

app.use('/home', homePageRouter());
app.use('/detail', detailPageRouter());
app.use('/search', searchRouter());

app.use('/', (_, res) => {
  res.status(400);
  res.end();
});

app.listen(process.env.PORT, () => {
  console.log(`Started listening at ${process.env.HOST}:${process.env.PORT}`);
});
