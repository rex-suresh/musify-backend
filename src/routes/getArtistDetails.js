const { resolveRequest } = require('../api/REST-methods');
const { mapToListResponse } = require('../mappers/mapToTrackResponse');
const { mapToListResponse: mapToAlbumListResponse } = require('../mappers/mapToAlbumResponse');
const { routes } = require('../utils/routes');

const getArtistTracks = (req, res) => {
  const { id } = req.params;
  resolveRequest(res, routes.artistTracks(id), mapToListResponse(true), req.originalUrl);
};

const getArtistAlbums = (req, res) => {
  const { id } = req.params;
  resolveRequest(res, routes.artistAlbums(id), mapToAlbumListResponse, req.originalUrl);
};

module.exports = { getArtistTracks, getArtistAlbums };
