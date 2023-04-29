import React from "react";
import './NewTaskComponent.css';
import clock from '../../../pictures/add-task-clock.svg'
import bell from '../../../pictures/add-task-bell.svg'

import SaveButtonComponent from "../../TaskModifyComponent/WatchTaskComponent/SaveButtonComponent/SaveButtonComponent";
export default function NewTaskComponent(){
    return(
        <div className="new-task">

            <div className="task-header">

                <form><input placeholder="Введите название" className="task-header-input"/></form>

            </div>

            <div className="task-header-line"></div>

            <div className="task-modify-elements">

                <div className="element-data-start">

                    <a href="@" className="text-link-color">Дата-время начала</a>

                </div>

                <div className="element-data-end">

                    <a href="@" className="text-link-color">Дата-время окончания</a>

                </div>

                <div className="element-notification-whole-day">

                    <label>
                        <a href="@"><img src={clock} /></a>
                        <span className="text-link-color">Весь день</span>
                        <input type="checkbox"/>

                    </label>


                </div>

                <div className="element-notification-add">
                    <div className="add-bell-container"><a href="@" className="notification-add-bell"><img
                        src={bell}/></a></div>
                    <div className="add-notification-container"><a href="@" className="text-link-color">Добавить
                        уведомление</a></div>

                </div>


            </div>

            <div className="new-task-description">

                <span className="description-header">Описание Задачи:</span>


                <div>
                    <form>
                        <textarea className="task-description-text" placeholder="добавьте описание"></textarea>
                    </form>
                </div>

            </div>

            <SaveButtonComponent/>

        </div>
    )
}