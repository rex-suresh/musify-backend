const { resolveRequest } = require('../api/REST-methods');
const { routes } = require('../utils/routes');
const { mapToListResponse } = require('../mappers/mapToArtistResponse');

const getHomeArtists = (req, res) => {
  resolveRequest(res, routes.topArtists(), mapToListResponse, req.originalUrl);
};

module.exports = { getHomeArtists };
