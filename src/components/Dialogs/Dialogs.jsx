import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

function Dialogs ( props ) {

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

    let dialogsElements = props.dialogs.map ( d => <DialogItem name={ d.name } id={ d.id }/> );
    let messagesElements = props.messages.map ( m => <Message message={ m.message }/> );

    return (
        <div className={ s.dialogs }>
            <div className={ s.dialogsItems }>
                { dialogsElements }
            </div>
            <div className={ s.messages }>
                { messagesElements }
            </div>
        </div>
    );
}

export default Dialogs;
