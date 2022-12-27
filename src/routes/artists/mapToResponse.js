const { routes } = require('../../utils/routes');

const mapArtistInfo = (artistInfo) => {
  const { id, name } = artistInfo;

  return {
    id,
    name,
    image: routes.artImage(id)
  };
};

const mapToListResponse = ({ artists }) => {
  const response = { artists: [], type: 'artists-list' };

  if (artists.length < 1) {
    return response;
  }

  response.artists = artists.map(mapArtistInfo);
  return response;
};

module.exports = { mapToListResponse };
