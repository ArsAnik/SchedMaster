import React from "react";
import './WatchTaskComponent.css';
import ModifyButtonComponent from "./ModifyButtonComponent/ModifyButtonComponent";
export default function WatchTaskComponent(){
    return(
        <div className="watch-task">

            <div className="task-header">

                Наглаживание кота

            </div>

            <div className="task-header-underline"></div>
            <div className="task-additional">

                <div className="additional-information">

                    <div className="information-data">15.02.2023</div>
                    <div className="information-time">20:00 - 21:00</div>


                </div>
                <div className="additional-remembering">

                    <div className="remembering-word">Напомнить</div>
                    <div className="remembering-times">
                        <div className="remembering-time">
                            за <span>30 минут</span>
                        </div>
                        <div className="remembering-time">
                            за <span>5 минут</span>
                        </div>
                    </div>

                </div>
            </div>

            <div className="task-description">

                <div className="description-header"><span>Описание Задачи:</span></div>
                <div className="description-text">Погладь кота! Нет сам погладь кота! Да не хочу я гладить кота! А ты
                    должен его гладить!!!!
                </div>

            </div>

            <ModifyButtonComponent/>

        </div>
    )
}