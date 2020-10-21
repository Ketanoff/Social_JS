import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = ( props ) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={ s.dialog }>
            <NavLink to={ path } activeClassName={ s.activeLink }>{ props.name }</NavLink>
        </div>
    );
};

const Message = ( props ) => {
    return <div className={ s.message }>{ props.message }</div>;
};

function Dialogs ( props ) {

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
    let dialogsElements = dialogs.map ( d => <DialogItem name={ d.name } id={ d.id }/> );

    let messagesElements = messages.map ( m => <Message message={ m.message }/> );

    return (
        <div className={ s.dialogs }>
            <div className={ s.dialogsItems }>
                {dialogsElements}
            </div>
            <div className={ s.messages }>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;
