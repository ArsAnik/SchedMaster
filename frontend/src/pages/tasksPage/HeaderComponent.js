import React from "react";
import './headerTSC-style.css'

export default function HeaderComponent(){
    return(
        <header className="header">
            <div className="header-text">
                <div className="header-text-task active">

                    <a className="header-text-task-button" href="@">Задачи</a>

                </div>

                <div className="header-text-schedule">
                    <div className="header-text-schedule-container">

                        <a className="header-text-schedule-button" href="@">Расписание</a>
                    </div>

                </div>

                <div className="header-text-calendar">

                    <a className="header-text-calendar-button" href="@">Календарь</a>

                </div>

            </div>

            <a className="open-personalWindow without-avatar" href="@">
                <span className="personLetter">Я</span>

            </a>

            <div className="header-line">

            </div>
        </header>
    )
}