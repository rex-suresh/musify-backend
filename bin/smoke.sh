#! /bin/bash

BROWSER="Arc"
HOST="http://127.0.0.1:4000"

open -a "${BROWSER}" "${HOST}"
open -a "${BROWSER}" "${HOST}/home/artists"
open -a "${BROWSER}" "${HOST}/home/tracks"
open -a "${BROWSER}" "${HOST}/home/albums"
open -a "${BROWSER}" "${HOST}/home/playlists"

open -a "${BROWSER}" "${HOST}/detail/playlist/pp.225974698"
open -a "${BROWSER}" "${HOST}/album/alb.468545309"
open -a "${BROWSER}" "${HOST}/artist/tracks/Art.468545306"
open -a "${BROWSER}" "${HOST}/artist/albums/Art.468545306"

open -a "${BROWSER}" "${HOST}/search/smoke"
