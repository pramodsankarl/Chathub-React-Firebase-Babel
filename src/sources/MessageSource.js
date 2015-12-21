import Actions from '../actions';
import Firebase from 'firebase';

let firebaseRef = null;
let MessageSource = {
    getMessages: {
        remote(state){
            return new Promise((res, rej)=>{

                if(firebaseRef){
                    firebaseRef.off();
                }

                firebaseRef = new Firebase('https://chat-hub.firebaseio.com/messages/' + state.selectedChannel.key);

                firebaseRef.once('value', (dataSnapshot)=>{
                   let messages = dataSnapshot.val();
                    res(messages);
                });
            });
        },
        success: Actions.messagesReceived,
        error: Actions.messagesFailed,
        loading:Actions.messagesLoading
    }
}

export default MessageSource;