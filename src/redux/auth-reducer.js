import {authAPI} from '../api/api';

const SET_USERS_DATA = 'SET_USERS_DATA';

let initialState = {
    id    : null,
    login : null,
    email : null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
};

export const setAuthUsersData = (userId, email, login) => (
    {type: SET_USERS_DATA, data: {userId, email, login}});
export const getAuthUsersData = () => (dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {userId, email, login} = response.data.data;
            dispatch(setAuthUsersData(userId, email, login));
        }
    });
};

export default authReducer;