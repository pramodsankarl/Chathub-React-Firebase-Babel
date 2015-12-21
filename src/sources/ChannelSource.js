import Actions from '../actions';
import Firebase from 'firebase';

let firebaseRef = new Firebase('https://chat-hub.firebaseio.com/channels');
let ChannelSource = {
    getChannels: {
        remote(){
            return new Promise((res, rej)=>{
                firebaseRef.once('value', (dataSnapshot)=>{
                   let channels = dataSnapshot.val();
                    res(channels);
                });
            });
        },
        success: Actions.channelsReceived,
        error: Actions.channelsFailed
    }
}

export default ChannelSource;