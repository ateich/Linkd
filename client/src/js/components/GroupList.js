'use strict';

import React from 'react';
import Group from './Group';
import '../../stylesheets/components/groupList.scss';


let GroupList = React.createClass({
  
  render () {

    let groupNodes = this.props.groups.map((group) => {
      return (
        <Group 
          key={group.id}
          group={group}
          folders={this.props.folders}
          links={this.props.links} 
          updateGroup={this.props.updateGroup}
          updateFolder={this.props.updateFolder}
          updateLink={this.props.updateLink} />
      );
    });

    return (
      <div className="groupList">
        {groupNodes}
        <hr />
      </div>
    );
  }
});

export default GroupList;