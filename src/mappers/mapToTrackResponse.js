const { routes } = require('../utils/routes');
const { removeDuplicates } = require('./mapperUtils');

const mapTrackInfo = (routeOf = routes.sqrImage) => (trackInfo) => {
  const {
    id,
    name,
    playbackSeconds,
    albumId,
    albumName,
    artistName,
    artistId,
    previewURL,
  } = trackInfo;

  return {
    id,
    name,
    image: new URL(routeOf(albumId)),
    playbackSeconds,
    album: { name: albumName, id: albumId },
    artist: { name: artistName, id: artistId },
    song: previewURL,
  };
};

const mapTrackList = ({ tracks }) =>
  tracks.map(mapTrackInfo(routes.sqrImageMicro));

const mapToListResponse = (microImage) => ({ tracks }) => {
  const response = { result: [], type: 'tracks-list' };

  if (tracks.length < 1) {
    return response;
  }

  const mapper = microImage ?
    mapTrackInfo(routes.sqrImageMicro) : mapTrackInfo();
  response.result = tracks.map(mapper).reduce(removeDuplicates, []);
  return response;
};

module.exports = { mapToListResponse, mapTrackList };
