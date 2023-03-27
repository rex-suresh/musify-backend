const { mapToListResponse: mapArtists } =
  require('../../mappers/mapToArtistResponse');
const { mapToListResponse: mapAlbums } =
  require('../../mappers/mapToAlbumResponse');
const { mapToListResponse: mapTracks } =
  require('../../mappers/mapToTrackResponse');
const { mapToListResponse: mapPlaylists } =
  require('../../mappers/mapToPlaylistResponse');

const mapToSearchData = ({ search }) => {
  if (!search || !search.data) {
    return {
      result: {
        artists: [], albums: [], tracks: [], playlists: []
      }
    };
  }

  const result = {
    artists: mapArtists(search.data)?.result,
    albums: mapAlbums(search.data)?.result,
    tracks: mapTracks(true)(search.data)?.result,
    playlists: mapPlaylists(search.data)?.result
  };

  return { result };
};

module.exports = { mapToSearchData };
