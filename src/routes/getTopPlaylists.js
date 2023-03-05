const { resolveRequest } = require('../api/REST-methods');
const { routes } = require('../utils/routes');
const { mapToListResponse } = require('../mappers/mapToPlaylistResponse');

const getHomePlaylists = (req, res) => {
  resolveRequest(res, routes.featuredPlaylists(), mapToListResponse, req.originalUrl);
};

module.exports = { getHomePlaylists };
