import React from 'react';
import Router from 'react-router';
import App from '../components/app.jsx';
import Chat from '../components/Chat.jsx';
import Login from '../components/Login.jsx';

let {Route, DefaultRoute} = Router;

let routes = (
    <Route path="/" handler={App}>
        <DefaultRoute handler={Chat} />
        <Route path="chat" handler={Chat} />
        <Route path="chat/:channel" handler={Chat} />
        <Route path="login" handler={Login} />
    </Route>
);

Router.run(routes, Router.HashLocation, (Root)=>{
    React.render(<Root />, document.getElementById('container'));
});