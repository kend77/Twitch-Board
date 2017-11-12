import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import { deepPurple500, grey600 } from 'material-ui/styles/colors'


export default class SingleChannel extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div>
        <iframe
          src={`http://player.twitch.tv/?channel=${this.props.channel}&muted=${this.props.muted}`}
          height="500"
          width="890"
          frameBorder="0"
          scrolling="no"
          allowFullScreen="true"
          >
        </iframe>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <div>
          <FloatingActionButton
            onClick={() => this.props.removeChannel(this.props.channel)}
            backgroundColor={grey600}>
            <ContentRemove />
          </FloatingActionButton>
        </div>
          <FloatingActionButton className="add-button"
          onClick={() => this.props.changeChat(this.props.channel)}
          backgroundColor={deepPurple500}
          >
          <ContentAdd />
          </FloatingActionButton>
        <h4 className="chat-toggle-heading">Activate Lul's</h4>
        </div>
      </div>
    )
  }
}
