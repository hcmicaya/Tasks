import { CREATE, UPDATE, DELETE, FETCH_ALL } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const getTasks = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTasks();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const createTask = (task) => async (dispatch) => {
    try {
        const { data } = await api.createTask(task);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const updateTask = (task) => async (dispatch) => {
    try {
        const { data } = await api.updateTask(task);
        console.log(task, data);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const deleteTask = (task) => async (dispatch) => {
    try {
        const data = { data: task };
        await api.deleteTask(data);

        dispatch({ type: DELETE, payload: data });
    } catch (error) {
        console.log(task);
        console.log(error);
    }
};
