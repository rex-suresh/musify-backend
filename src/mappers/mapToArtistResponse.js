const { routes } = require('../utils/routes');

const mapArtistInfo = (artistInfo) => {
  const { id, name } = artistInfo;

  return {
    id,
    name,
    image: routes.artImage(id)
  };
};

const mapToListResponse = ({ artists }) => {
  const response = { result: [], type: 'artists-list' };

  if (artists.length < 1) {
    return response;
  }

  response.result = artists.map(mapArtistInfo);
  return response;
};

module.exports = { mapToListResponse };
