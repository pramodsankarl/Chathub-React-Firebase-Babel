import Alt from '../alt';
import Firebase from 'firebase';


class Actions {

    constructor(){
        this.generateActions(
            'channelsReceived',
            'channelsFailed',
            'messagesReceived',
            'messagesFailed',
            'channelSelected',
            'messagesLoading',
            'sendMessage',
            'messageSendSuccess',
            'messageSendError',
            'messageReceived'
        );
    }

    login(router) {
        return (dispatch) => {
            let fRef = new Firebase('https://chat-hub.firebaseio.com');
            fRef.authWithOAuthPopup('google', (err, user)=>{
                if(err){
                    return;
                }
                dispatch(user);

                router.transitionTo('/chat');
            });
        }
    }
}

export default Alt.createActions(Actions);
