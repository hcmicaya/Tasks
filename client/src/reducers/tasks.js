import { CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export default (state = { tasks: [] }, action) => {
    switch (action.type) {
        case CREATE:
            return [...state, action.payload];
        case DELETE:
            return {
                ...state,
                posts: state.posts.filter(
                    (post) => post._id !== action.payload
                ),
            };
        default:
            return state;
    }
};
