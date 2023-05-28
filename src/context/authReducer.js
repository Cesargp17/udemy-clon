export const authReducer = ( state, action ) => {
    switch (action.type) {
        case '[Auth] - Login':
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload
            }

        case '[Auth] - Logout':
            return {
                ...state,
                isLoggedIn: false,
                user: undefined
            }

        case '[Auth] - Checking':
            return {
                ...state,
                isLoggedIn: 'checking',
                user: undefined
            }
    
        default:
            return state;
    }
}