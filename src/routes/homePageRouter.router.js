const express = require('express');
const { getHomeAlbums } = require('./getTopAlbums');
const { getHomeArtists } = require('./getTopArtists');
const { getHomePlaylists } = require('./getTopPlaylists');
const { getHomeTracks } = require('./getTopTracks');

const homePageRouter = () => {
  const router = express.Router();

  router.get('/artists', getHomeArtists);
  router.get('/tracks', getHomeTracks);
  router.get('/albums', getHomeAlbums);
  router.get('/playlists', getHomePlaylists);

  return router;
};

module.exports = { homePageRouter };
