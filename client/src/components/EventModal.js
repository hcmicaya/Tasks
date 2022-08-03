import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { createTask, updateTask } from "../actions/tasks";

const labelsClasses = { OTP: "indigo", Revision: "green", Special: "red" };

export default function EventModal({ currentId, setCurrentId }) {
    const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } =
        useContext(GlobalContext);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [taskData, setTaskData] = useState({
        projectNumber: "",
        phase: "",
        storeNumber: "",
        location: "",
        assigned: "",
        comments: "",
    });
    const task = useSelector((state) =>
        currentId ? state.tasks.tasks.find((p) => p._id === currentId) : null
    );

    function handleSubmit(e) {
        e.preventDefault();
        if (currentId) {
            dispatch(updateTask(currentId, { ...taskData }));
        } else {
            dispatch(createTask({ ...taskData }, navigate));
        }

        setShowEventModal(false);
    }
    return (
        <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
            <form className="bg-white rounded-lg shadow-2xl w-1/4">
                <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
                    <span className="material-icons-outlined text-gray-400">
                        drag_handle
                    </span>
                    <div>
                        {selectedEvent && (
                            <span
                                onClick={() => {
                                    dispatchCalEvent({
                                        type: "delete",
                                        payload: selectedEvent,
                                    });
                                    setShowEventModal(false);
                                }}
                                className="material-icons-outlined text-gray-400 cursor-pointer"
                            >
                                delete
                            </span>
                        )}
                        <button onClick={() => setShowEventModal(false)}>
                            <span className="material-icons-outlined text-gray-400">
                                close
                            </span>
                        </button>
                    </div>
                </header>
                <div className="p-3">
                    <div className="grid grid-cols-1/5 items-center gap-y-7 px-2">
                        <div></div>
                        <input
                            type="text"
                            name="projectNumber"
                            placeholder="Project #"
                            value={taskData.projectNumber}
                            required
                            className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                            onChange={(e) =>
                                setTaskData({
                                    ...taskData,
                                    projectNumber: e.target.value,
                                })
                            }
                        />

                        <span className="material-icons-outlined text-gray-400">
                            schedule
                        </span>
                        <div className="flex gap-x-5 items-center">
                            <p>{daySelected.format("dddd, MMMM DD")}</p>

                            {Object.keys(labelsClasses).map((lblClass, i) => (
                                <span
                                    key={i}
                                    onClick={() =>
                                        setTaskData({
                                            ...taskData,
                                            phase: lblClass,
                                        })
                                    }
                                    className={`bg-${labelsClasses[lblClass]}-500 rounded-lg flex  cursor-pointer items-center px-2`}
                                >
                                    {taskData.phase === lblClass && (
                                        <span className="material-icons-outlined text-white text-sm">
                                            check
                                        </span>
                                    )}

                                    {lblClass}
                                </span>
                            ))}
                        </div>

                        <span className="material-icons-outlined text-gray-400">
                            home
                        </span>
                        <span className="flex space-x-5">
                            <input
                                type="text"
                                name="storeNumber"
                                placeholder="Store #"
                                value={taskData.storeNumber}
                                required
                                className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                                onChange={(e) =>
                                    setTaskData({
                                        ...taskData,
                                        storeNumber: e.target.value,
                                    })
                                }
                            />
                            <input
                                type="text"
                                name="location"
                                placeholder="Location"
                                value={taskData.location}
                                required
                                className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                                onChange={(e) =>
                                    setTaskData({
                                        ...taskData,
                                        location: e.target.value,
                                    })
                                }
                            />
                        </span>

                        <span className="material-icons-outlined text-gray-400">
                            segment
                        </span>
                        <input
                            type="text"
                            name="comments"
                            placeholder="Add comments"
                            value={taskData.comments}
                            required
                            className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                            onChange={(e) =>
                                setTaskData({
                                    ...taskData,
                                    comments: e.target.value,
                                })
                            }
                        />
                        <span className="material-icons-outlined text-gray-400">
                            perm_identity
                        </span>
                        <input
                            type="text"
                            name="assigned"
                            placeholder="Assigned"
                            value={taskData.assigned}
                            required
                            className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                            onChange={(e) =>
                                setTaskData({
                                    ...taskData,
                                    assigned: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>
                <footer className="flex justify-end border-t p-3 mt-5">
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
                    >
                        Save
                    </button>
                </footer>
            </form>
        </div>
    );
}
