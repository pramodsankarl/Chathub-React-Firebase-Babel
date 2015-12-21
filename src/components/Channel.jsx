import React from 'react';
import mui from 'material-ui';
import Actions from '../actions';

let {ListItem} = mui;

class Channel extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        let style = {};

        if(this.props.channel.selected){
            style.backgroundColor = '#f0f0f0';
        }
        return (
            <ListItem
            style={style} onClick={this.selectChannel.bind(this)}>
                {this.props.channel.name}
            </ListItem>);
    }

    selectChannel(){
        console.log('Channel Selected is:', this.props.channel);
        Actions.channelSelected(this.props.channel);
    }

}

export default Channel;