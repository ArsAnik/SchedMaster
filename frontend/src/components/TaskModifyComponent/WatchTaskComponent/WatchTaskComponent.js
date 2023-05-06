import React from "react";
import SaveButtonComponent from "../../CommonElement/SaveButtonComponent/SaveButtonComponent";
import './WatchTaskComponent.css';

export default function WatchTaskComponent(){
    return(
        <div className="watch-task">

            <form>
                <div className="task-header">

                    <input type="text" value="Наглаживание кота" className="header-modify"/>

                </div>
            </form>

            <div className="task-header-underline"></div>
            <div className="task-additional">

                <div className="additional-information">

                    <a href="@" className="information-data-link">
                        <div className="information-data">15.02.2023</div>
                    </a>
                    <a href="@">
                        <div className="information-time">20:00 - 21:00</div>
                    </a>


                </div>
                <div className="additional-remembering">

                    <a href="@" className="additional-remembering-link">
                        <div className="remembering-word">Напомнить</div>
                        <div className="remembering-times">
                            <div className="remembering-time">
                                за <span>30 минут</span>
                            </div>
                            <div className="remembering-time">
                                за <span>5 минут</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div className="task-description">

                <div className="description-header"><span>Описание Задачи:</span></div>
                <form>
                    <div className="description-text"><textarea className="description-text-modify">Погладь кота! Нет сам погладь кота! Да не хочу я гладить кота! А ты должен его гладить!!!!</textarea>
                    </div>
                </form>

            </div>

            <SaveButtonComponent/>

        </div>
    )
}