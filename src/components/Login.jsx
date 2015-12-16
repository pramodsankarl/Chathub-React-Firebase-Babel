import React from 'react';
import mui from 'material-ui';
import Actions from '../actions';

let {Card, CardText, RaisedButton} = mui;

class Login extends React.Component{

    onClick(){
        Actions.login();
    }

    render(){
        return (
            <Card style={{
            'maxWidth':'800px',
            'margin': '30px auto',
            'padding' : '50px'
            }}>
                <CardText style={{
                'textAlign': 'center'
                }}>
                    Please use your Google account to login..
                </CardText>
                <RaisedButton style={{ display: 'block' }}
                onClick={this.onClick.bind(this)} label="Log in with Google">
                </RaisedButton>
            </Card>
        );
    }
}

export default Login;