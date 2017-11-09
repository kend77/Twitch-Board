import React, { Component } from 'react';
import SingleChannel from './SingleChannel'
import Chat from './Chat'

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
      <div style={{display: 'flex'}}>
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
    )
  }
}
