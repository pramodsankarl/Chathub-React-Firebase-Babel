import Actions from '../actions';
import Firebase from 'firebase';
import _ from 'lodash';

let firebaseRef = new Firebase('https://chat-hub.firebaseio.com/channels');
let ChannelSource = {
    getChannels: {
        remote(state, selectedChannelKey){
            return new Promise((res)=>{
                firebaseRef.once('value', (dataSnapshot)=>{
                   let channels = dataSnapshot.val();
                   selectedChannelKey = selectedChannelKey || _.first(_.keys(channels));
                    let selectedChannel = channels[selectedChannelKey];

                    if(selectedChannel){
                        selectedChannel.selected = true;
                    }

                   res(channels);
                });
            });
        },
        success: Actions.channelsReceived,
        error: Actions.channelsFailed
    }
}

export default ChannelSource;