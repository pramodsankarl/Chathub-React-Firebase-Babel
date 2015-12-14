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
            messages:[]
        }

        this.firebaseRef = new FireBase('https://chat-hub.firebaseio.com/messages');
        this.firebaseRef.once('value', (dataSnapshot)=>{
           let messages = dataSnapshot.val();
            this.setState({messages});
        });
    }

    render(){
        let messageNodes = this.state.messages.map((message) => (
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

}

export default MessageList;