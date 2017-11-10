import { userInfo } from 'os';

const streamers = require('express').Router()
const axios = require('axios')


streamers.get('/', (req, res, next) => {
  var config = {
    headers: {'Client-ID': '5ofhnax1z7epshsokecempewjdbb6e'}
  }
  axios.get('https://api.twitch.tv/helix/users/follows?from_id=116145701', config)
    .then(results => results.data)
    .then(follows => {
      const streamers = follows.data.map(result => {
        return `id=${result['to_id']}`
      }).join('&')

      var UserConfig = {
        headers: {
          'Client-ID': '5ofhnax1z7epshsokecempewjdbb6e',
          'Authorization': 'Bearer cfabdegwdoklmawdzdo98xt2fo512y'
        }
      }
      axios.get('https://api.twitch.tv/helix/users?' + streamers, UserConfig)
    })



})



module.exports = streamers;
