import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';


const SearchChannels = (props) => (
  <div id="search" style={{display: 'flex', 'justifyContent': 'space-between'}}>
    <AutoComplete
      onNewRequest={(value) => props.addStream(value)}
      hintText="search streamers..."
      dataSource={props.channels}
    /><br />
    {props.activeChannels.length ?
    <h2 id="heading">Twitch Board</h2> :
    ''
    }
  </div>
);

export default SearchChannels;
