import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';
import _ from 'lodash';
import connectToStores from 'alt/utils/connectToStores';
import ChatStore from '../stores/ChatStore';

let {Card, List, CircularProgress} = mui;

@connectToStores
class MessageList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            messages:{}
        }
    }

    static getStores(){
        return [ChatStore];
    }

    static getPropsFromStores(){
        return ChatStore.getState();
    }

    render(){

        let messageNodes = null;

        if(!this.props.messagesLoading){
            messageNodes = _.values(this.props.messages).map((message) => (
                <Message message={message} />
            ));
        }else{
            messageNodes = (<CircularProgress mode="indeterminate" className="progress-bar"/>);
        }

        return (
            <Card  className="message-item">
                <List>{messageNodes}</List>
            </Card>
        );
    }
}

export default MessageList;