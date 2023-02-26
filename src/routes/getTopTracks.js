const { resolveRequest } = require('../api/REST-methods');
const { routes } = require('../utils/routes');
const { mapToListResponse } = require('../mappers/mapToTrackResponse');

const getHomeTracks = (_, res) => {
  resolveRequest(res, routes.topTracks(1, 20), mapToListResponse());
};

module.exports = { getHomeTracks };
