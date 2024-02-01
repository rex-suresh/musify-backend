const { api_domain, image_domain } = require('../config');

const getRange = (level) => {
  const ranges = ['day', 'week', 'month', 'year', 'life'];
  return ranges[level - 1] || 'week';
};

const buildTopRangeLink = (section, level, limit) => {
  return `${api_domain}/${section}/top?range=${getRange(level)}&limit=${limit}`;
};

const buildTopLink = (section, limit) => {
  return `${api_domain}/${section}/top?limit=${limit}`;
};

const routes = {
  topTracks: (level = 1, limit = 20) => buildTopRangeLink('tracks', level, limit),
  topPlaylists: (level = 1, limit = 10) => buildTopRangeLink('playlists', level, limit),
  topArtists: (limit = 10) => buildTopLink('artists', limit),
  topAlbums: (limit = 20) => buildTopLink('albums', limit),

  featuredPlaylists: (limit = 10) => `${api_domain}/playlists/featured?limit=${limit}`,

  playlistTracks: (playlistID, limit = 10) => `${api_domain}/playlists/${playlistID}/tracks?limit=${limit}`,
  albumTracks: (albumID) => `${api_domain}/albums/${albumID}/tracks`,
  search: (key = '') => `${api_domain}/search/verbose?per_type_limit=${6}&query=${key.replace(' ', '+')}`,

  artistTracks: (id) => `${api_domain}/artists/${id}/tracks/top?limit=5`,
  artistAlbums: (id) => `${api_domain}/artists/${id}/albums/top?limit=10`,

  sqrImage: (id) => `${image_domain}/albums/${id}/images/500x500.jpg`, // tracks | albums
  sqrImageMicro: (id) => `${image_domain}/albums/${id}/images/200x200.jpg`, // tracks | albums
  artImage: (id) => `${image_domain}/artists/${id}/images/500x500.jpg`,
  playlistImage: (id) => `${image_domain}/playlists/${id}/artists/images/500x500.jpg?montage=2x2`, // generated images
};

module.exports = { routes };
