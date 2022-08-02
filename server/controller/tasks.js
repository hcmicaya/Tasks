import mongoose from "mongoose";
import TaskMessage from "../models/taskMessage.js";

export const getTasks = async (req, res) => {
    const { page } = req.query;

    try {
        res.status(200).json({});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
