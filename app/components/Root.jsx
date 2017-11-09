import React, { Component } from 'react';
import SingleChannel from './SingleChannel'
import Chat from './Chat'
import RaisedButton from 'material-ui/RaisedButton'
import SearchChannels from './SearchChannels'

const channels = ['ninja', 'drdisrespectlive', 'timthetatman']


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      channels: channels,
      currentChat: ''
    }
  }

  componentDidMount() {
    this.setState({currentChat: this.state.channels[0]})
  }


  render() {
    return (
      <div>
      <SearchChannels channels={channels} />
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div>
        {this.state.channels.map(channel => {
          return (
            <button onClick={() => this.setState({currentChat: channel})}>
            <SingleChannel channel={channel} />
            </button>
          )
        })}
        </div>
        <Chat currentChat={this.state.currentChat}/>
      </div>
      </div>
    )
  }
}
