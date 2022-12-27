const { routes } = require('../../utils/routes');

const mapTrackInfo = (trackInfo) => {
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
    image: new URL(routes.sqrImage(albumId)),
    playbackSeconds,
    album: { name: albumName, id: albumId },
    artist: { name: artistName, id: artistId },
    song: previewURL,
  };
};

const mapToListResponse = ({ tracks }) => {
  const response = { tracks: [], type: 'tracks-list' };

  if (tracks.length < 1) {
    return response;
  }

  response.tracks = tracks.map(mapTrackInfo);
  return response;
};

module.exports = { mapToListResponse };
