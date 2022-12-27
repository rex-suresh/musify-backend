const { routes } = require('../../utils/routes');

const stripExtraChars = (description) =>
  description.replace(/\t/g, '').replace(/\n/g, '');

const mapPlaylistInfo = (playlistInfo) => {
  const { id, name, description } = playlistInfo;

  return {
    id,
    name,
    image: new URL(routes.playlistImage(id)),
    description: stripExtraChars(description)
  };
};

const mapToListResponse = ({ playlists }) => {
  const response = { playlists: [], type: 'playlists-list' };

  if (playlists.length < 1) {
    return response;
  }

  response.playlists = playlists.map(mapPlaylistInfo);
  return response;
};

module.exports = { mapToListResponse };
