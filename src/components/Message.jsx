import React from 'react';
import mui from 'material-ui';

let {ListItem, Avatar} = mui;

class Message extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <ListItem leftAvatar={<Avatar src="https://i.stack.imgur.com/spzYW.jpg?s=328&g=1" />}>
                {this.props.message}
            </ListItem>);
    }

}

export default Message;