import React from 'react';
import mui from 'material-ui';
import trim from 'trim';
import FireBase from 'firebase';


let {Card} = mui;

class MessageBox extends React.Component{
    constructor(props){
        super(props);

        this.state={
            message:''
        };

        this.firebaseRef = new FireBase('https://chat-hub.firebaseio.com/messages');
    }

    onChange(e){
        let message =  e.target.value;
        this.setState({ message });
    }

    onKeyUp(e){
        if(e.keyCode === 13 && trim(e.target.value)){
            e.preventDefault();

            let {message} = this.state;

            this.firebaseRef.push({
                message
            });

            this.setState({
                message:''
            });
        }
    }

    render() {
        return (
            <Card style={{
            maxWidth: 1200,
            margin: '30px auto',
            padding: 30
            }}>
                <textarea style={{
                    width: '100%',
                    borderColor: '#D0D0D0',
                    resize: 'none',
                    borderRadius: 3,
                    minHeight: 50,
                    color: '#555',
                    fontSize: 14,
                    outline: 'auto 0'
                }}
                          value={this.state.message}
                          onKeyUp={this.onKeyUp.bind(this)}
                          onChange={this.onChange.bind(this)}/>
            </Card>);
    }

}

export default MessageBox;