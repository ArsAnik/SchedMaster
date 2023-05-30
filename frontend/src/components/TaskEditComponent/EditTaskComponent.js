import React from "react";
import SaveButtonComponent from "../CommonElement/SaveButtonComponent/SaveButtonComponent";
import './EditTaskComponent.css';

export default function EditTaskComponent(props){
    return(
        <div className="edit-task">

            <form>
                <div className="task-header">

                    <input type="text" value={props.name} className="header-modify"/>

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
                    <div className="description-text"><textarea className="description-text-modify">{props.description}</textarea>
                    </div>
                </form>

            </div>

            <SaveButtonComponent id={props.id}/>

        </div>
    )
}