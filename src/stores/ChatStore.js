import Alt from '../alt';
import Actions from '../actions';
import {decorate, bind, datasource} from 'alt/utils/decorators';
import ChannelSource from '../sources/ChannelSource';
import MessageSource from '../sources/MessageSource';
import _ from 'lodash';


@datasource(ChannelSource, MessageSource)
@decorate(Alt)
class ChatStore{

    constructor(){
        this.state = {user:null, messages:null, messagesLoading:true};
    }

    @bind(Actions.login)
    login(user){
        this.setState({user});
    }

    @bind(Actions.channelSelected)
    channelSelected(selectedChannel){
        let {channels} = this.state;

        _(this.state.channels).values().each((channel)=>{
            channel.selected = false;
        }).value();

        selectedChannel.selected = true;

        this.setState({
            selectedChannel,
            channels
        });

        setTimeout(this.getInstance().getMessages, 100);
    }

    @bind(Actions.messagesReceived)
    receivedMessages(messages){
        _(messages).keys().each((k)=>{
            messages[k].key = k;
        }).value();

        this.setState({
            messages,
            messagesLoading:false
        });
    }

    @bind(Actions.channelsReceived)
    receivedChannels(channels){
        let selectedChannel = null;

        _(channels).keys().each((k, idx)=>{
            channels[k].key = k;
            channels[k].selected = idx ===0;
            if(!selectedChannel){
                selectedChannel = channels[k];
            }
        }).value();

        this.setState({
            channels,
            selectedChannel
        });

        setTimeout(this.getInstance().getMessages, 100);
    }

    @bind(Actions.messagesLoading)
    messagesLoading(){
        this.setState({
            messagesLoading:true
        });
    }

    @bind(Actions.sendMessage)
    sendMessage(message){
        this.state.message = message;
        setTimeout(this.getInstance().sendMessage, 0);
    }

    @bind(Actions.messageReceived)
    messageReceived(message){

        let messages = this.state.messages || {};

        if( messages[message.key]){
            return;
        }

        messages[message.key] = message;
        this.setState({messages});
    }

}

export default Alt.createStore(ChatStore);