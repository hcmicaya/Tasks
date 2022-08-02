import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    jobNumber: String,
    storeLocation: String,
    assigned: [Strings],
    deadline: {
        type: Date,
        default: new Date(),
    },
    comments: {
        type: [String],
        default: [],
    },
});

const TaskMessage = mongoose.model("TaskMessage", taskSchema);

export default TaskMessage;
