import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import ChatStore from '../stores/ChatStore';

class Chat extends React.Component{
    render(){
        return  (<section>
            <div className="hub-container">
                <ChannelList {...this.props}  />
                <MessageList className="message-list"/>
            </div>
            <MessageBox />
        </section>);
    }

    static willTransitionTo(transition){
        let {user: loggedInUser = null} = ChatStore.getState();
        if(!loggedInUser){
            transition.redirect('/login');
        }
    }
}

export default Chat;