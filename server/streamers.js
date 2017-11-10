const streamers = require('express').Router()
const axios = require('axios')


streamers.get('/', (req, res, next) => {
  var config = {
    headers: {'Client-ID': '5ofhnax1z7epshsokecempewjdbb6e'}
  }
  axios.get('https://api.twitch.tv/helix/users/follows?from_id=116145701', config)
    .then(results1 => {
      axios.get('https://api.twitch.tv/helix/users/follows?from_id=116145701&after=eyJiIjpudWxsLCJhIjoiMTQ1Njc2OTI2NjkxNTU1NjAwMCJ9', config)
        .then(results2 => {
          const data = [...results1.data.data, ...results2.data.data]
          console.log(data)
          const streamers = data.map(result => {
            return `id=${result['to_id']}`
          }).join('&')
          var UserConfig = {
            headers: {
              'Client-ID': '5ofhnax1z7epshsokecempewjdbb6e',
              'Authorization': 'Bearer cfabdegwdoklmawdzdo98xt2fo512y'
            }
          }
          axios.get('https://api.twitch.tv/helix/users?' + streamers, UserConfig)
            .then(res => res.data)
            .then(streamerInfo => res.json(streamerInfo))
        })
      })

})



module.exports = streamers;
