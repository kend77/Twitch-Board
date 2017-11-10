import React, { Component } from 'react';
import SingleChannel from './SingleChannel'
import Chat from './Chat'
import RaisedButton from 'material-ui/RaisedButton'
import SearchChannels from './SearchChannels'
import axios from 'axios'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      activeChannels: [],
      allChannels: [],
      currentChat: ''
    }
    this.handleAddStreamer = this.handleAddStreamer.bind(this)
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
  }

  handleAddStreamer(streamer) {
    if(this.state.activeChannels.length === 0) {
    this.setState({activeChannels: [...this.state.activeChannels, streamer],
    currentChat: streamer})
    } else {
      this.setState({activeChannels: [...this.state.activeChannels, streamer]})
    }
  }


  render() {
    return (
      <div>
      <SearchChannels addStream={this.handleAddStreamer} channels={this.state.allChannels} activeChannels={this.state.activeChannels} />
      {this.state.activeChannels.length ?
      <div style={{display: 'flex', justifyContent: "flex-right", width: "100%"}}>
        <div width="75%">
        {this.state.activeChannels.map((channel, index) => {
          return (
            <div key={index} className="channel">
              <button onClick={() => this.setState({currentChat: channel})}>
                <SingleChannel channel={channel} />
              </button>
            </div>
          )
        })}
        </div>
        <div id="chat" width="25%">
          <Chat currentChat={this.state.currentChat}/>
        </div>
      </div> : <h1 id="welcome">Welcome To Twitch Board</h1>
      }
      </div>
    )
  }
}
