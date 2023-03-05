const { resolveRequest } = require('../api/REST-methods');
const { routes } = require('../utils/routes');
const { mapToListResponse } = require('../mappers/mapToTrackResponse');

const getHomeTracks = (req, res) => {
  resolveRequest(res, routes.topTracks(1, 20), mapToListResponse(), req.originalUrl);
};

module.exports = { getHomeTracks };
