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
            messageNodes = (<CircularProgress mode="indeterminate" style={{
                paddingTop:20,
                paddingBottom:20,
                margin: '0 auto',
                display: 'block',
                width:'60px'
            }}/>);
        }

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