import React, { Component } from 'react';

export default class Chat extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div >
        <iframe
          frameborder='0'
          scrolling="no"
          id="chat_embed"
          src={`http://www.twitch.tv/${this.props.currentChat}/chat`}
          height="700"
          width="500"
          position="fixed"
          >
        </iframe>
      </div>
    )
  }
}
