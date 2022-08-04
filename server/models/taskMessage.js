import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    projectNumber: String,
    phase: String,
    storeNumber: String,
    location: String,
    assigned: [String],
    deadline: String,
    comments: String,
    color: String,
});

const TaskMessage = mongoose.model("TaskMessage", taskSchema);

export default TaskMessage;
