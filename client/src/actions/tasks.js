import { CREATE, UPDATE, DELETE } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const createTask = (task, navigate) => async (dispatch) => {
    try {
        const { data } = await api.createTask(task);
        navigate(`/`);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const updateTask = (id, task) => async (dispatch) => {
    try {
        const { data } = await api.updateTask(id, task);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};
