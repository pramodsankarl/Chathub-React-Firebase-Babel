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
            'messagesLoading'
        );
    }

    login(args) {
        return (dispatch) => {
            let fRef = new Firebase('https://chat-hub.firebaseio.com');
            fRef.authWithOAuthPopup('google', (err, user)=>{
                if(err){
                    return;
                }
                dispatch(user);
            });
        }
    }
}

export default Alt.createActions(Actions);
