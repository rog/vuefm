import config from './config'
const { appKey } = config

export default function getArtists (country) {
  const lastFMEndpoint = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${country}&api_key=${appKey}&format=json`
  return fetch(lastFMEndpoint)
    .then(res => res.json())
    .then(json => json.topartists.artist)
}
