import React, { Component } from 'react';


export default class SingleChannel extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {
    return (
      <div>
        <iframe
          src={`http://player.twitch.tv/?channel=${this.props.channel}&muted=true`}
          height="480"
          width="854"
          frameborder="0"
          scrolling="no"
          allowfullscreen="true"
          >
        </iframe>
      </div>
    )
  }
}
