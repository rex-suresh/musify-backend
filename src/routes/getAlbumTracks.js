const { resolveRequest } = require('../api/REST-methods');
const { mapToListResponse } = require('../mappers/mapToTrackResponse');
const { routes } = require('../utils/routes');

const getAlbumTracks = (req, res) => {
  const { id } = req.params;
  resolveRequest(res, routes.albumTracks(id), mapToListResponse(true), req.originalUrl);
};

module.exports = { getAlbumTracks };
