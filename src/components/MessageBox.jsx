import React from 'react';
import mui from 'material-ui';
import trim from 'trim';

let {Card} = mui;

class MessageBox extends React.Component{
    constructor(props){
        super(props);

        this.state={
            message:''
        };
    }

    onChange(e){
        this.setState({
            message: e.target.value
        });
    }

    onKeyUp(e){
        if(e.keyCode === 13 && trim(e.target.value)){
            e.preventDefault();
            this.setState({
                message:''
            });
            console.log('Sent a new message', e.target.value);
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