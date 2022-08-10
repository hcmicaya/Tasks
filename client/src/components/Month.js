import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../actions/tasks";
import Day from "./Day";
export default function Month({ month }) {
    const dispatch = useDispatch();
    const { tasks } = useSelector((state) => state.tasks);

    useEffect(() => {
        dispatch(getTasks());
    }, []);

    return tasks ? (
        <div className="flex-1 grid grid-cols-7 grid-rows-5">
            {month.map((row, i) => (
                <React.Fragment key={i}>
                    {row.map((day, idx) => (
                        <Day
                            task={tasks.filter(
                                (task) =>
                                    task.deadline === day.format("MM-DD-YY")
                            )}
                            day={day}
                            key={idx}
                            rowIdx={i}
                        />
                    ))}
                </React.Fragment>
            ))}
        </div>
    ) : (
        "wew"
    );
}
