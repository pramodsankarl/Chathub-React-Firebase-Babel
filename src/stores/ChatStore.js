import Alt from '../alt';
import Actions from '../actions';
import {decorate, bind, datasource} from 'alt/utils/decorators';


@decorate(Alt)
class ChatStore{

    constructor(){
        this.state = {user:null};
    }

    @bind(Actions.login)
    login(user){
        this.setState({user});
    }
}

export default Alt.createStore(ChatStore);