import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { grey600 } from 'material-ui/styles/colors'

const style = {
  margin: 12
};

export default class Chat extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className="chat">
        <RaisedButton label="Mute All" backgroundColor={grey600} labelColor="white" style={style} />
        <iframe
          frameBorder='0'
          scrolling="yes"
          id="chat_embed"
          src={`http://www.twitch.tv/${this.props.currentChat}/chat`}
          height="523"
          width="500"
          >
        </iframe>
        </div>
    )
  }
}
