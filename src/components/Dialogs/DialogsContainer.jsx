import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

// const DialogsContainer = () => {
//     return <StoreContext.Consumer>
//         {store => {
//             let onSendMessageClick = () => {
//                 store.dispatch(sendMessageCreator());
//             };
//
//             let onNewMessageChange = (body) => {
//                 store.dispatch(updateNewMessageBodyCreator(body));
//             };
//             return <Dialogs updateNewMessageBody={onNewMessageChange}
//                             dialogsPage={store.getState().dialogsPage}
//                             sendMessage={onSendMessageClick}/>;
//         }}
//     </StoreContext.Consumer>;
// };

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage         : () => {
            dispatch(sendMessageCreator());
        }
    };
};

/*const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));*/

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
    // withAuthRedirect
)(Dialogs);
