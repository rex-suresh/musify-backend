require('dotenv').config();

const domain = process.env.API_DOMAIN;
const img_domain = process.env.IMAGE_DOMAIN;
// const fallBackDomain = process.env.API_DOMAIN_2;

const getRange = (level) => {
  const ranges = ['day', 'week', 'month', 'year', 'life'];
  return ranges[level - 1] || 'week';
};

const buildTopRangeLink = (section, level, limit) => {
  return `${domain}/${section}/top?range=${getRange(level)}&limit=${limit}`;
};

const buildTopLink = (section, limit) => {
  return `${domain}/${section}/top?limit=${limit}`;
};

const routes = {
  topTracks: (level = 1, limit = 20) =>
    buildTopRangeLink('tracks', level, limit),
  topPlaylists: (level = 1, limit = 10) =>
    buildTopRangeLink('playlists', level, limit),
  topArtists: (limit = 10) => buildTopLink('artists', limit),
  topAlbums: (limit = 20) => buildTopLink('albums', limit),

  featuredPlaylists: (limit = 10) =>
    `${domain}/playlists/featured?limit=${limit}`,

  playlistTracks: (playlistID, limit = 10) => `${domain}/playlists/${playlistID}/tracks?limit=${limit}`,
  albumTracks: (albumID) => `${domain}/albums/${albumID}/tracks`,
  search: (key = '') =>
    `${domain}/search/verbose?per_type_limit=${6}` +
    `&query=${key.replace(' ', '+')}`,

  artistTracks: (id) => `${domain}/artists/${id}/tracks/top?limit=5`,
  artistAlbums: (id) => `${domain}/artists/${id}/albums/top?limit=10`,

  sqrImage: (id) => // tracks | albums
    `${img_domain}/albums/${id}/images/500x500.jpg`,
  sqrImageMicro: (id) => // tracks | albums
    `${img_domain}/albums/${id}/images/200x200.jpg`,
  artImage: (id) =>
    `${img_domain}/artists/${id}/images/500x500.jpg`,
  playlistImage: (id) => // generated images
    `${img_domain}/playlists/${id}/artists/images/500x500.jpg?montage=2x2`,
};

module.exports = { routes };
