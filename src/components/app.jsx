import React from 'react';
import MessageList from './MessageList.jsx';
import mui from 'material-ui';

let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;
let AppBar = mui.AppBar;

class App extends React.Component{
    constructor(){
        super();
        ThemeManager.setPalette({
            primary1Color:Colors.blue500,
            primary2Color:Colors.blue700,
            primary3Color:Colors.blue100,
            accent1Color:Colors.pink400
        });
    }

    static childContextTypes = {
        muiTheme: React.PropTypes.object
    };

    getChildContext(){
        let muiTheme = ThemeManager.getCurrentTheme();

        return {
            muiTheme
        };
    }

    render(){
        return (
            <div>
                <AppBar title="Chat Hub"/>
                <MessageList />
            </div>
        )
    }
}

export default App;