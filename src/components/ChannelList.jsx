import React from 'react';
import Channel from './Channel.jsx';
import mui from 'material-ui';
import connectToStores from 'alt/utils/connectToStores';
import ChatStore from '../stores/ChatStore';
import _ from 'lodash';

let {Card, List, CircularProgress} = mui;

@connectToStores
class ChannelList extends React.Component{
    constructor(props){
        super(props);
    }

    static getStores(){
        return [ChatStore];
    }

    static getPropsFromStores(){
        return ChatStore.getState();
    }

    componentDidMount(){
        this.selectedChannel = this.props.params.channel;
        ChatStore.getChannels(this.selectedChannel);
    }

    componentWillReceiveProps(nextProps){
        let {channel} = nextProps.params;
        if(this.selectedChannel !== channel){
            this.selectedChannel = channel;
            ChatStore.getChannels(channel);
        }
    }

    render(){
        if(!this.props.channels) {
            return (
                <Card className="channel-list" >
                    <CircularProgress
                        mode="indeterminate"
                        className="progress-bar" />
                </Card>
            );
        }

        let channelNodes = _(this.props.channels).keys().map((key) => (
            <Channel channel={this.props.channels[key]} />
        )).value();

        return (
            <Card className="channel-list">
                <List>{channelNodes}</List>
            </Card>
        );
    }

}

export default ChannelList;