import React, { Component } from 'react';

export default class Chat extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <iframe
          frameBorder='0'
          scrolling="no"
          id="chat_embed"
          src={`http://www.twitch.tv/${this.props.currentChat}/chat`}
          height="650"
          width="500"
          >
        </iframe>
      </div>
    )
  }
}
