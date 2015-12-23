import React from 'react';
import mui from 'material-ui';
import Actions from '../actions';

let {Card, CardText, RaisedButton} = mui;

class Login extends React.Component{

    onClick(){
        Actions.login(this.context.router);
    }

    static contextTypes = {
        router: React.PropTypes.func.isRequired
    };

    render(){
        return (
            <Card className="login-container">
                <CardText className="info-text">
                    Please use your Google account to login..
                </CardText>
                <RaisedButton className="btn"
                    onClick={this.onClick.bind(this)} label="Log in with Google">
                </RaisedButton>
            </Card>
        );
    }
}

export default Login;