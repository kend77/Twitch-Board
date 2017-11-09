import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';

const SearchChannels = (props) => (
  <div>
    <AutoComplete
      hintText="search streamers..."
      dataSource={props.channels}
    /><br />
  </div>
);

export default SearchChannels;
