const { routes } = require('../../utils/routes');

const mapAlbumInfo = (albumInfo) => {
  const { id, name, artistName, contributingArtists, label, explicit } = albumInfo;

  return {
    id,
    name,
    artist: { name: artistName, id: contributingArtists?.primaryArtist },
    label,
    explicit,
    image: routes.sqrImage(id)
  };
};

const mapToListResponse = ({ albums }) => {
  const response = { albums: [], type: 'albums-list' };

  if (albums.length < 1) {
    return response;
  }

  response.albums = albums.map(mapAlbumInfo);
  return response;
};

// const mapToSingleResponse = () => {
//   // haven't hit this problem yet.
// };

module.exports = { mapToListResponse };
