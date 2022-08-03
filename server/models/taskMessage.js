import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    projectNumber: String,
    storeNumber: String,
    storeLocation: String,
    assigned: [String],
    deadline: String,
    comments: {
        type: [String],
        default: [],
    },
});

const TaskMessage = mongoose.model("TaskMessage", taskSchema);

export default TaskMessage;
