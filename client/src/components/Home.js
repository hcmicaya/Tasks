import React, { useState, useContext, useEffect } from "react";
import "../App.css";
import { getMonth } from "../util";
import CalendarHeader from "./CalendarHeader";
import Sidebar from "./Sidebar";
import Month from "./Month";
import GlobalContext from "../context/GlobalContext";
import EventModal from "./EventModal";

const Home = () => {
    const [currenMonth, setCurrentMonth] = useState(getMonth());
    const { monthIndex, showEventModal } = useContext(GlobalContext);
    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
    }, [monthIndex]);

    return (
        <React.Fragment>
            {showEventModal && (
                <EventModal currentId={currentId} setCurrentId={setCurrentId} />
            )}

            <div className="h-screen flex flex-col">
                <CalendarHeader />
                <div className="flex flex-1">
                    <Sidebar />
                    <Month month={currenMonth} />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Home;
