const initState = {
    users: [
        { id: 1, name: 'Eric' },
        { id: 2, name: 'Hoi Dan IT' },
        { id: 3, name: 'Bao' },
    ],
    posts: []
}
//reducer redux
const rootReducer = (state = initState, action) => {
    let users = state.users;
    switch (action.type) {
        case 'DELETE_USER':
            users = users.filter((item => {
                return item !== action.payload;
            }))
            return {
                ...state, users
            };//trả về object state và ghi đè lại users
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 1000);
            let user = {
                id: id,
                name: `random ${id}`
            }
            return {
                ...state, users: [...users, user]
            };
        default:
            return state;
    }
}

export default rootReducer;