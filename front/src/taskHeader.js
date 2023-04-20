import React from "react";

const taskHeader = () => {
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
                <!--<img src="../pictures/meButton.png" alt="аватарка">-->
            </a>

            <div className="header-line">

            </div>
        </header>
    )
}

export default taskHeader;