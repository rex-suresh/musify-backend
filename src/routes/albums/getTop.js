const { get } = require('../../api/REST-methods');
const { routes } = require('../../utils/routes');
const { mapToListResponse } = require('./mapToResponse');

const getHomeAlbums = (_, res) => {
  const topAlbumsReq = get(routes.topAlbums());

  topAlbumsReq.then(({ data }) => res.json(mapToListResponse(data)));
};

module.exports = { getHomeAlbums };
