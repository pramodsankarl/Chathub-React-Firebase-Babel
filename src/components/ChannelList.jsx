import React from 'react';
import Channel from './Channel.jsx';
import mui from 'material-ui';
let {Card, List} = mui;

class ChannelList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            channels:[
                'Dogs',
                'Cats'
            ]
        }
    }

    render(){
        let channelNodes = this.state.channels.map((channel) => (
            <Channel channel={channel} />
        ));

        return (
            <Card style={{
                flexGrow:1
            }}>
                <List>{channelNodes}</List>
            </Card>
        );
    }

}

export default ChannelList;