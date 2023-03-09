const { requestFor } = require('../api/REST-methods');
const { mapTrackList } = require('../mappers/mapToTrackResponse');
const { mapAlbumList } = require('../mappers/mapToAlbumResponse');
const { routes } = require('../utils/routes');

const tracksReq = async (id, mapper) =>
  requestFor(routes.artistTracks(id), mapper);

const albumsReq = async (id, mapper) =>
  requestFor(routes.artistAlbums(id), mapper);

const extractValue = (response) =>
  response.status === 'fulfilled' ? response.value : [];

const getArtistDetail = async (req, res) => {
  const { id } = req.params;

  const [tracksData, albumsData] =
    await Promise.allSettled([
      tracksReq(id, mapTrackList),
      albumsReq(id, mapAlbumList)
    ]);

  res.json({
    result: {
      id,
      tracks: extractValue(tracksData),
      albums: extractValue(albumsData),
      bio: null // Has to be fetched from a different source
    }
  });
};

module.exports = { getArtistDetail };
