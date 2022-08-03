import { CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export default (state = { tasks: [] }, action) => {
    switch (action.type) {
        case CREATE:
            return [...state.tasks, action.payload];
        case DELETE:
            return {
                ...state,
                tasks: state.tasks.filter(
                    (task) => task._id !== action.payload
                ),
            };
        default:
            return state;
    }
};
