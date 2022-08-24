import dayjs from "dayjs";
import React, { useContext, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTasks } from "../actions/tasks";
import GlobalContext from "../context/GlobalContext";

export default function Day({ day, rowIdx, task }) {
    const [dayEvents, setDayEvents] = useState([]);

    const {
        setDaySelected,
        setShowEventModal,
        filteredEvents,
        setSelectedEvent,
        daySelected,
    } = useContext(GlobalContext);

    useEffect(() => {
        const events = filteredEvents.filter(
            (evt) =>
                dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
        );

        setDayEvents(events);
    }, [filteredEvents, day]);

    function getCurrentDayClass() {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
            ? "bg-blue-600 text-white rounded-full w-7"
            : "";
    }
    return (
        <div
            className="border border-gray-200 flex flex-col cursor-pointer"
            onClick={() => {
                setDaySelected(day);
                setShowEventModal(true);
            }}
        >
            <header className="flex flex-col items-center">
                {rowIdx === 0 && (
                    <p className="text-sm mt-1">
                        {day.format("ddd").toUpperCase()}
                    </p>
                )}
                <p
                    className={`text-sm p-1 my-1 text-center  ${getCurrentDayClass()}`}
                >
                    {day.format("DD")}
                </p>
            </header>
            <div>{/* {console.log(dayTasks)} */}</div>
            <div className="flex-1 ">
                {dayEvents.map((evt, idx) => (
                    <div
                        key={idx}
                        onClick={() => setSelectedEvent(evt)}
                        className={`bg-${evt.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
                    >
                        {evt.title}
                    </div>
                ))}
                {task?.map((task) => (
                    <div
                        onClick={() => setSelectedEvent(task)}
                        className={` p-1 mb-3 rounded flex-auto justifty-self-center `}
                    >
                        <div
                            className={
                                "text-center text-lg font-bold text-blue-500 underline"
                            }
                        >
                            {task.projectNumber}
                        </div>
                        <table className="table-fixed border-collapse border-2 rounded border-gray-400 w-full break-all ">
                            <thead className={`bg-${task.color}-200 rounded`}>
                                <tr>
                                    <th className="border-l border-b border-gray-200">
                                        {task.phase}
                                    </th>
                                    <th className="border-l border-b border-gray-200">
                                        {task.storeNumber}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border-l border-b border-gray-200">
                                        Assigned:
                                    </td>

                                    {task.assigned.map((item) => (
                                        <td className="border-l border-b border-gray-200">
                                            {item}
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="border-l border-b border-gray-200">
                                        Comments:
                                    </td>
                                    <td className="border-l border-b border-gray-200">
                                        {task.comments}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        {/* <div className="grid grid-cols-2 gap-3">
                            <div>{task.storeNumber}</div>
                            <div>{task.location}</div>
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    );
}
