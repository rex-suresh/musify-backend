const { get } = require('../../api/REST-methods');
const { routes } = require('../../utils/routes');
const { mapToListResponse } = require('./mapToResponse');

const getHomeTracks = (_, res) => {
  const topTracksReq = get(routes.topTracks(1, 20));
  topTracksReq.then(({ data }) => res.send(mapToListResponse(data)));
};

module.exports = { getHomeTracks };
