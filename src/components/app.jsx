import React from 'react';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            messages:[
                'hi there, how are you',
                'I am fine, how are you'
            ]
        }
    }

    render(){
        let messageNodes = this.state.messages.map((message) => (
           <div>{message}</div>
        ));

        return (
            <div style={{color:'red'}}>{messageNodes}</div>
        )
    }
}

export default App;