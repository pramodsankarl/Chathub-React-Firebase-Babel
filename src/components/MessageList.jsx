import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';
let {Card, List} = mui;

class MessageList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            messages:[
                'hi there, how are you',
                'I am fine, how are you'
            ]
        }
    }

    render(){
        let messageNodes = this.state.messages.map((message) => (
            <Message message={message} />
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