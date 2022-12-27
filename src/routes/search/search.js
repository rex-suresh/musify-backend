const { get } = require('../../api/REST-methods');
const { routes } = require('../../utils/routes');
const { mapToSearchData } = require('./responseMapper');

const searchCombination = (req, res) => {
  const { keywords } = req.params;
  const searchKeyWord = keywords?.replaceAll(',', ' ');

  const url = routes.searchCombination(searchKeyWord || '');
  get(url).then(data => {
    const searchData = mapToSearchData(data);
    res.json(searchData);
  });
};

const searchPlain = (req, res) => {
  const { keywords } = req.query;

  const url = routes.searchKeyword(keywords || 'top');
  get(url).then(data => {
    const searchData = mapToSearchData(data);
    res.json(searchData);
  });
};

module.exports = { searchCombination, searchPlain };
