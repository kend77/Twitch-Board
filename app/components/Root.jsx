import React, { Component } from 'react';
import SingleChannel from './SingleChannel'
import Chat from './Chat'
import RaisedButton from 'material-ui/RaisedButton'
import SearchChannels from './SearchChannels'
import axios from 'axios'

const channels = ['timthetatman']
// ,'drdisrespectlive', 'ninja'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      channels: channels,
      currentChat: ''
    }
  }

  componentDidMount() {
    axios.get
    this.setState({currentChat: this.state.channels[0]})
  }


  render() {
    return (
      <div>
      <SearchChannels channels={channels} />
      <div style={{display: 'flex', justifyContent: "flex-start", width: "100%"}}>
        <div>
        {this.state.channels.map(channel => {
          return (
            <div className="channel">
              <button onClick={() => this.setState({currentChat: channel})}>
                <SingleChannel channel={channel} />
              </button>
            </div>
          )
        })}
        </div>
        <Chat currentChat={this.state.currentChat}/>
      </div>
      </div>
    )
  }
}
