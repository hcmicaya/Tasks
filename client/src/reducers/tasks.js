import {
    CREATE,
    UPDATE,
    DELETE,
    FETCH_ALL,
    START_LOADING,
    END_LOADING,
} from "../constants/actionTypes";

export default (state = { isLoading: true, tasks: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case FETCH_ALL:
            return {
                ...state,
                tasks: action.payload.data,
            };
        case CREATE:
            return [...state.tasks, action.payload];
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
                    (task) => task._id !== action.payload._id
                ),
            };
        default:
            return state;
    }
};
