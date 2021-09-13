import {profileAPI} from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts      : [
        {id: 1, message: 'Hi, how are you?', likesCount: 11},
        {id: 2, message: 'i\'m learn react', likesCount: 111},
        {id: 3, message: 'i\'m learn GRID', likesCount: 9},
        {id: 4, message: 'i\'m learn react', likesCount: 22}
    ],
    newPostText: 'Venych.com',
    profile    : null,
    status     : ''
};

const profileReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id        : 5,
                message   : state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts      : [...state.posts, newPost],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText};
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        default:
            return state;
        case SET_STATUS:
            return {...state, status: action.status};
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => (
    {type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => (
    {type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => (
    {type: SET_STATUS, status});
export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
};
export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setUserStatus(response.data));
    });
};
export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    });
};
export default profileReducer;