const express = require('express');
const { searchCombination, searchPlain } = require('./search');
const { getSearchSuggestions } = require('./searchSuggestions');

const searchRouter = () => {
  const router = express.Router();

  router.get('/suggest', getSearchSuggestions);
  router.get('/combined', searchCombination);
  router.get('/plain', searchPlain);

  return router;
};

module.exports = { searchRouter };
