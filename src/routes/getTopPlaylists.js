const { resolveRequest } = require('../api/REST-methods');
const { routes } = require('../utils/routes');
const { mapToListResponse } = require('../mappers/mapToPlaylistResponse');

const getHomePlaylists = (_, res) => {
  resolveRequest(res, routes.featuredPlaylists(), mapToListResponse);
};

module.exports = { getHomePlaylists };
