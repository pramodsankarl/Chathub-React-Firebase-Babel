import React from 'react';
import Message from './Message.jsx';

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
            <div>{messageNodes}</div>
        );
    }

}

export default MessageList;