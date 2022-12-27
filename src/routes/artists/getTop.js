const { get } = require('../../api/REST-methods');
const { routes } = require('../../utils/routes');
const { mapToListResponse } = require('./mapToResponse');

const getHomeArtists = (_, res) => {
  const topArtistsReq = get(routes.topArtists());
  topArtistsReq.then(({ data }) => res.send(mapToListResponse(data)));
};

module.exports = { getHomeArtists };
