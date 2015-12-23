import React from 'react';
import mui from 'material-ui';
import trim from 'trim';
import Actions from '../actions';


let {Card, TextField} = mui;

class MessageBox extends React.Component{
    constructor(props){
        super(props);

        this.state={
            message:''
        };
    }

    onChange(e){
        let message =  e.target.value;
        this.setState({ message });
    }

    onKeyUp(e){
        if(e.keyCode === 13 && trim(e.target.value)){
            e.preventDefault();

            let {message} = this.state;

            Actions.sendMessage(message);

            this.setState({
                message:''
            });
        }
    }

    render() {
        return (
            <Card className="message-box">
                <TextField
                    hintText="Say something..."
                    multiLine={true} fullWidth={true}
                    value={this.state.message}
                    onKeyUp={this.onKeyUp.bind(this)}
                    onChange={this.onChange.bind(this)}/>

            </Card>);
    }

}

export default MessageBox;