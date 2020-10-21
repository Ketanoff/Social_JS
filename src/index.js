import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    { id: 1, message: 'Hi, how are you?', likesCount: 11 },
    { id: 1, message: 'i\'m learn react', likesCount: 111 },
    { id: 1, message: 'i\'m learn GRID', likesCount: 9 },
    { id: 1, message: 'i\'m learn react', likesCount: 22 }
];


let dialogs = [
    { id: 1, name: 'Veniamin' },
    { id: 2, name: 'Prof' },
    { id: 3, name: 'Max' },
    { id: 4, name: 'WelDDer' },
    { id: 5, name: 'Bot_Chat' }
];

let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Hello' },
    { id: 3, message: 'What up?' },
    { id: 4, message: 'Go l2)' },
    { id: 5, message: 'ednsjmem,m' }
];

ReactDOM.render (
    <React.StrictMode>
        <App messages={ messages } dialogs={ dialogs } posts={ posts }/>
    </React.StrictMode>,
    document.getElementById ( 'root' )
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister ();
