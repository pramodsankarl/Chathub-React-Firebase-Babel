import React from 'react';
import mui from 'material-ui';
import Actions from '../actions';

let {ListItem} = mui;

class Channel extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <ListItem
                href={'/#/chat/' + this.props.channel.key}
                 className={ this.props.channel.selected ? 'channel-item selected' : 'channel-item'}>
                {this.props.channel.name}
            </ListItem>);
    }
}

export default Channel;