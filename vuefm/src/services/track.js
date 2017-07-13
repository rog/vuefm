import vueFMMusicService from './vuefm-music'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'

  return vueFMMusicService.get('/search', {
    params: { q, type }
  })
  .then(res => res.data)
}

export default trackService
