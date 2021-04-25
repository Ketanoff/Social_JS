import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sideBarReducer from './sideBar-reducer';

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
//
// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
// const SEND_MESSAGE = 'SEND_MESSAGE';

// let store = {
//     _state: {
//         profilePage: {
//             posts      : [
//                 {id: 1, message: 'Hi, how are you?', likesCount: 11},
//                 {id: 1, message: 'i\'m learn react', likesCount: 111},
//                 {id: 1, message: 'i\'m learn GRID', likesCount: 9},
//                 {id: 1, message: 'i\'m learn react', likesCount: 22}
//             ],
//             newPostText: 'it-Venych.com'
//         },
//
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Veniamin'},
//                 {id: 2, name: 'Prof'},
//                 {id: 3, name: 'Max'},
//                 {id: 4, name: 'WelDDer'},
//                 {id: 5, name: 'Bot_Chat'}
//             ],
//
//             messages      : [
//                 {id: 1, message: 'Hi'},
//                 {id: 2, message: 'Hello'},
//                 {id: 3, message: 'What up?'},
//                 {id: 4, message: 'Go l2)'},
//                 {id: 5, message: 'ednsjmem,m'}
//             ],
//             newMessageBody: ''
//         },
//
//         sideBar: {
//             friends: [
//                 {id: 1, name: 'WelDDer', avatar: 'https://download-cs.net/steam/avatars/3416.jpg'},
//                 {id: 2, name: 'Prof', avatar: 'https://download-cs.net/steam/avatars/3186.jpg'},
//                 {id: 3, name: 'Bot_Chat', avatar: 'https://download-cs.net/steam/avatars/3428.jpg'}
//             ]
//         }
//
//     },
//     _callSubscriber() {
//         console.log('State changed');
//     },
//
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//
//     /*addPost () {
//         let newPost = {
//             id: 5,
//             message: this._state.profilePage.newPostText,
//             likesCount: 0
//         };
//         this._state.profilePage.posts.push (newPost);
//         this._state.profilePage.newPostText = '';
//         this._callSubscriber (this._state);
//     },*/
//     /*updateNewPostText (newText) {
//         this._state.profilePage.newPostText = newText;
//         this._callSubscriber (this._state);
//     },*/
//
//     dispatch(action) {
//
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.sideBar = sideBarReducer(this._state.sideBar, action);
//
//         this._callSubscriber(this._state);
//         // if (action.type === 'ADD-POST') {
//         //     let newPost = {
//         //         id        : 5,
//         //         message   : this._state.profilePage.newPostText,
//         //         likesCount: 0
//         //     };
//         //     this._state.profilePage.posts.push(newPost);
//         //     this._state.profilePage.newPostText = '';
//         //     this._callSubscriber(this._state);
//         // } else
//         //     if (action.type === 'UPDATE-NEW-POST-TEXT') {
//         //         this._state.profilePage.newPostText = action.newText;
//         //         this._callSubscriber(this._state);
//         //     } else
//         //         if (action.type === 'UPDATE_NEW_MESSAGE_BODY') {
//         //             this._state.dialogsPage.newMessageBody = action.body;
//         //             this._callSubscriber(this._state);
//         //         } else
//         //             if (action.type === 'SEND_MESSAGE') {
//         //                 let body = this._state.dialogsPage.newMessageBody;
//         //                 this._state.dialogsPage.messages.push({message: body, id: 6});
//         //                 this._state.dialogsPage.newMessageBody = '';
//         //                 this._callSubscriber(this._state);
//         //             }
//     }
// };

// export const addPostActionCreator = () => ({type: ADD_POST});
// export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
//
// export const sendMessageCreator = () => ({type: SEND_MESSAGE});
// export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

// export default store;
// window.store = store;
