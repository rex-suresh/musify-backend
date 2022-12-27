const { get } = require('../../api/REST-methods');
const { routes } = require('../../utils/routes');
const { mapToListResponse } = require('./mapToResponse');

const getHomePlaylists = (_, res) => {
  const featuredPlaylistsReq = get(routes.featuredPlaylists());
  featuredPlaylistsReq.then(({ data }) => res.send(mapToListResponse(data)));
};

module.exports = { getHomePlaylists };
