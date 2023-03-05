const { resolveRequest } = require('../api/REST-methods');
const { routes } = require('../utils/routes');
const { mapToListResponse } = require('../mappers/mapToAlbumResponse');

const getHomeAlbums = (req, res) => {
  resolveRequest(res, routes.topAlbums(), mapToListResponse, req.originalUrl);
};

module.exports = { getHomeAlbums };
