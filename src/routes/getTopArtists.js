const { resolveRequest } = require('../api/REST-methods');
const { routes } = require('../utils/routes');
const { mapToListResponse } = require('../mappers/mapToArtistResponse');

const getHomeArtists = (_, res) => {
  resolveRequest(res, routes.topArtists(), mapToListResponse);
};

module.exports = { getHomeArtists };
