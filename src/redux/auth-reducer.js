const SET_USERS_DATA = 'SET_USERS_DATA';

let initialState = {
    id        : null,
    login     : null,
    email     : null,
    isFetching: false
};

const authReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.data
            };
        
        default:
            return state;
    }
};

export const setAuthUsersData = (userId, email, login) => ({type: SET_USERS_DATA, data: {userId, email, login}});

export default authReducer;