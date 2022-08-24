import { CREATE, UPDATE, DELETE, FETCH_ALL } from "../constants/actionTypes";

export default (state = { isLoading: true, tasks: [] }, action) => {
    switch (action.type) {
        case FETCH_ALL:
            return {
                ...state,
                tasks: action.payload.data,
            };
        case CREATE:
            return { ...state, tasks: state.tasks.concat(action.payload) };
        case UPDATE:
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task._id === action.payload._id ? action.payload : task
                ),
            };
        case DELETE:
            return {
                ...state,
                tasks: state.tasks.filter(
                    (task) => task._id !== action.payload.data._id
                ),
            };
        default:
            return state;
    }
};
