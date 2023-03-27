const express = require('express');
const { getAlbumTracks } = require('./getAlbumTracks');
const { getArtistTracks, getArtistAlbums } = require('./getArtistDetails');
const { getPlaylistTracks } = require('./getPlaylistTracks');

const detailPageRouter = () => {
  const router = express.Router();
  router.get('/playlist/:id', getPlaylistTracks);
  router.get('/album/:id', getAlbumTracks);
  router.get('/artist/tracks/:id', getArtistTracks);
  router.get('/artist/albums/:id', getArtistAlbums);

  return router;
};

module.exports = { detailPageRouter };
