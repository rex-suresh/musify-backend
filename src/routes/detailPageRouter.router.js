const express = require('express');
const { getPlaylistTracks } = require('./getPlaylistTracks');

const detailPageRouter = () => {
  const router = express.Router();
  router.get('/playlist/:id', getPlaylistTracks);

  return router;
};

module.exports = { detailPageRouter };
