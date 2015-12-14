import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';
import FireBase from 'firebase';
import _ from 'lodash';

let {Card, List} = mui;

class MessageList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            messages:{}
        }

        this.firebaseRef = new FireBase('https://chat-hub.firebaseio.com/messages');
        this.firebaseRef.on('child_added', (...args) => this.handleMessageAdd(...args));
        this.firebaseRef.on('child_removed', (...args)=> this.handleMessageRemove(...args));
    }

    render(){
        let messageNodes = _.values(this.state.messages).map((message) => (
            <Message message={message.message} />
        ));

        return (
            <Card  style={{
                flexGrow:2,
                marginLeft: 30
            }}>
                <List>{messageNodes}</List>
            </Card>
        );
    }

    handleMessageAdd(message){
        if(this.state.messages[message.key()]){
            return;
        }

        let messObj = message.val(),
            key = message.key();

        this.state.messages[key] = messObj;

        this.setState({messages : this.state.messages});
    }

    handleMessageRemove(message){
        delete this.state.messages[message.key()];
        this.setState({messages:this.state.messages})
    }

}

export default MessageList;