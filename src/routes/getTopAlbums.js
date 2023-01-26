const { resolveRequest } = require('../api/REST-methods');
const { routes } = require('../utils/routes');
const { mapToListResponse } = require('../mappers/mapToAlbumResponse');

const getHomeAlbums = (_, res) => {
  resolveRequest(res, routes.topAlbums(), mapToListResponse);
};

module.exports = { getHomeAlbums };
