const express = require('express');
const { getAlbumTracks } = require('./getAlbumTracks');
const { getPlaylistTracks } = require('./getPlaylistTracks');

const detailPageRouter = () => {
  const router = express.Router();
  router.get('/playlist/:id', getPlaylistTracks);
  router.get('/album/:id', getAlbumTracks);

  return router;
};

module.exports = { detailPageRouter };
