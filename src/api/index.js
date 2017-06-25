import config from './config'
const { appKey } = config

const lastFMEndpoint = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=mexico&api_key=${appKey}&format=json`

export default function getArtists () {
  return fetch(lastFMEndpoint)
    .then(res => res.json())
    .then(json => json.topartists.artist)
}
