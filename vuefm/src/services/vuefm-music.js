import trae from 'trae'
import configService from './config'

const vueFMMusicService = trae.create({
  baseUrl: configService.apiUrl
})

export default vueFMMusicService
