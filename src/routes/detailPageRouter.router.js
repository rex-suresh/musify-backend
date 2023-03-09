const express = require('express');
const { getAlbumTracks } = require('./getAlbumTracks');
const { getArtistDetail } = require('./getArtistDetails');
const { getPlaylistTracks } = require('./getPlaylistTracks');

const detailPageRouter = () => {
  const router = express.Router();
  router.get('/playlist/:id', getPlaylistTracks);
  router.get('/album/:id', getAlbumTracks);
  router.get('/artist/:id', getArtistDetail);

  return router;
};

module.exports = { detailPageRouter };
