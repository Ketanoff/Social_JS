const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        // {
        //     id      : 1, photoURL: 'https://download-cs.net/steam/avatars/3120.jpg',
        //     status: 'on their studies',
        //     followed: false, fullName: 'Jon S.', location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id      : 2, photoURL: 'https://download-cs.net/steam/avatars/3120.jpg',
        //     status: 'at work',
        //     followed: true, fullName: 'Welder', location: {city: 'Neryungri', country: 'Yakutia'}
        // },
        // {
        //     id      : 3, photoURL: 'https://download-cs.net/steam/avatars/3120.jpg',
        //     status: 'at work',
        //     followed: true, fullName: 'Max', location: {city: 'Moscow', country: 'Russia'}
        // },
        // {
        //     id      : 4, photoURL: 'https://download-cs.net/steam/avatars/3120.jpg',
        //     status: 'in the guardhouse',
        //     followed: false, fullName: 'Prof', location: {city: 'Kiev', country: 'Ukraine'}
        // }
    ]
};

const usersReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            };
        
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            };
        
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]};
        }
        default:
            return state;
        
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;