const { resolveRequest } = require('../api/REST-methods');
const { mapToListResponse } = require('../mappers/mapToTrackResponse');
const { routes } = require('../utils/routes');

const getPlaylistTracks = (req, res) => {
  const { id } = req.params;
  resolveRequest(res, routes.playlistTracks(id), mapToListResponse(true));
};

module.exports = { getPlaylistTracks };
