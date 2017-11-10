import React, { Component } from 'react';


export default class SingleChannel extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {
    return (
        <iframe
          src={`http://player.twitch.tv/?channel=${this.props.channel}&muted=true`}
          height="500"
          width="890"
          frameBorder="0"
          scrolling="no"
          allowFullScreen="true"
          >
        </iframe>
    )
  }
}
