const { requestFor } = require('../../api/REST-methods');
const { routes } = require('../../utils/routes');
const { mapToSearchData } = require('./responseMapper');

const search = async (req, res) => {
  const { keyword } = req.params;

  res.json(await requestFor(routes.search(keyword), mapToSearchData));
};

module.exports = { search };
