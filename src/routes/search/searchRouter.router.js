const express = require('express');
const { search } = require('./search');

const searchRouter = () => {
  const router = express.Router();
  router.get('/:keyword', search);
  return router;
};

module.exports = { searchRouter };
