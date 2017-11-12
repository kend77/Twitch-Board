import React, { Component } from 'react';
import SingleChannel from './SingleChannel'
import Chat from './Chat'
import RaisedButton from 'material-ui/RaisedButton'
import SearchChannels from './SearchChannels'
import axios from 'axios'
import { win32 } from 'path';


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      activeChannels: [],
      allChannels: [],
      currentChat: ''
    }
    this.handleAddStreamer = this.handleAddStreamer.bind(this)
    this.handleRemoveStreamer = this.handleRemoveStreamer.bind(this)
    this.changeChat = this.changeChat.bind(this)
  }

  componentDidMount() {
    axios.get('/api/streamers')
      .then(res => res.data)
      .then(results => {
        const streamers = results.data.map(streamer => {
          return streamer.login
        })
        this.setState({allChannels: streamers})
      })
      .catch(err => console.error(err))
  }


  handleAddStreamer(streamer) {
    if(this.state.activeChannels.length === 0) {
    this.setState({activeChannels: [...this.state.activeChannels, streamer],
    currentChat: streamer})
    } else {
      this.setState({activeChannels: [...this.state.activeChannels, streamer]})
    }
  }

  handleRemoveStreamer(streamer) {
    const remainingChannels = this.state.activeChannels.filter(channel => {
    return channel !== streamer
    })

    if(streamer === this.state.activeChannels[0]) {
      this.setState({
        activeChannels: remainingChannels,
        currentChat: this.state.activeChannels[1]
      })
    }

    this.setState({
      activeChannels: remainingChannels
    })
  }


  changeChat(channel) {
    this.setState({currentChat: channel})
  }


  render() {
    return (
      <div>
      <SearchChannels addStream={this.handleAddStreamer} channels={this.state.allChannels} activeChannels={this.state.activeChannels} />
      {this.state.activeChannels.length ?
      <div style={{display: 'flex', justifyContent: "flex-right", width: "100vw"}}>
        <div width="75vw">
        {this.state.activeChannels.map((channel, index) => {
          let muted = true
          if(index === 0) muted = false
          return (
            <div key={index} className="channel">
                <SingleChannel
                muted={muted}
                changeChat={this.changeChat}
                removeChannel={this.handleRemoveStreamer}
                channel={channel}
                />
            </div>
          )
        })}
        </div>
        <div className="chat" width="25vw">
          <Chat currentChat={this.state.currentChat}/>
        </div>
      </div> : <h1 id="welcome">Welcome To Twitch Board</h1>
      }
      </div>
    )
  }
}
