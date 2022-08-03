import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchTasks = () => API.get("/tasks");
export const createTask = (newTask) => API.post("/tasks", newTask);
export const updateTask = (id, updatedPost) => API.patch(`/`, updatedPost);
