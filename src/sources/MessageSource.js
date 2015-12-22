import Actions from '../actions';
import Firebase from 'firebase';

let firebaseRef = null;
let MessageSource = {
    sendMessage: {
      remote(state){
          "use strict";
            return new Promise((res)=>{
                if(!firebaseRef){
                    return res();
                }

                let {message, user} = state,
                    date = new Date().toUTCString(),
                    {google, uid: userId} = user,
                    {displayName: author,profileImageURL : profilePic } = google;

                firebaseRef.push({
                    message,
                    date,
                    author,
                    userId,
                    profilePic
                });
                res();
            });
      },
        success: Actions.messageSendSuccess,
        error: Actions.messageSendError
    },
    getMessages: {
        remote(state){
            return new Promise((res)=>{
                if(firebaseRef){
                    firebaseRef.off();
                }

                firebaseRef = new Firebase('https://chat-hub.firebaseio.com/messages/' + state.selectedChannel.key);

                firebaseRef.once('value', (dataSnapshot)=>{
                   let messages = dataSnapshot.val();
                    res(messages);
                });

                firebaseRef.on('child_added', msg=>{
                    let message = msg.val();
                    message.key = msg.key();
                    Actions.messageReceived(message);
                });
            });
        },
        success: Actions.messagesReceived,
        error: Actions.messagesFailed,
        loading:Actions.messagesLoading
    }
}

export default MessageSource;