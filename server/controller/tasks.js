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
    const task = req.body;
    const _id = task._id;

    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send("No task with that id");

    const updatedTask = await TaskMessage.findByIdAndUpdate(
        _id,
        { ...task },
        { new: true }
    );

    res.json(updatedTask);
};

export const deleteTask = async (req, res) => {
    const task = req.body;
    const _id = task._id;
    console.log(task);
    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send(`No task with that id`);
    await TaskMessage.findByIdAndRemove(_id);

    res.json({ message: "Task deleted successfully" });
};
