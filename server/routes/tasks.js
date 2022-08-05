import express from "express";
import {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
} from "../controller/tasks.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);
router.put("/", updateTask);
router.delete("/", deleteTask);

export default router;
