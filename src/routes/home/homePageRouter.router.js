const express = require('express');
const { getHomeAlbums } = require('../albums/getTop');
const { getHomeArtists } = require('../artists/getTop');
const { getHomePlaylists } = require('../playlists/getTop');
const { getHomeTracks } = require('../tracks/getTop');

const homePageRouter = () => {
  const router = express.Router();

  router.get('/artists', getHomeArtists);
  router.get('/tracks', getHomeTracks);
  router.get('/albums', getHomeAlbums);
  router.get('/playlists', getHomePlaylists);

  return router;
};

module.exports = { homePageRouter };
