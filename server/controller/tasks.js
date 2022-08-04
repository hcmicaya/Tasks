import mongoose from "mongoose";
import TaskMessage from "../models/taskMessage.js";

export const getTasks = async (req, res) => {
    try {
        const tasks = await TaskMessage.find();

        res.status(200).json({
            data: tasks,
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createTask = async (req, res) => {
    const task = req.body;

    const newTaskMessage = new TaskMessage({
        ...task,
    });

    try {
        await newTaskMessage.save();

        res.status(201).json(newTaskMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const updateTask = async (req, res) => {
    const { id: _id } = req.params;
    const task = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send("No task with that id");

    const updatedTask = await TaskMessage.findByIdAndUpdate(
        _id,
        { ...task, _id },
        { new: true }
    );

    res.json(updatedTask);
};

export const deleteTask = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("No Task with that id");
    await TaskMessage.findByIdAndRemove(id);

    res.json({ message: "Task deleted successfully" });
};
