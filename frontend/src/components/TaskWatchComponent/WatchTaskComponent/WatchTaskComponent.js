import React, {useEffect} from "react";
import './WatchTaskComponent.css';
import ModifyButtonComponent from "../ModifyButtonComponent/ModifyButtonComponent";
import DeleteButtonComponent from "../DeleteButtonComponent/DeleteButtonComponent";
import '../../TaskEditComponent/EditTaskComponent.css';

function WatchTaskComponent(props){

    return(
        <div className="watch-task">

            <div className="task-header">

                {props.name}

            </div>

            <div className="task-header-underline"></div>
            <div className="task-additional">

                <div className="additional-information">

                    <div className="information-data">{props.date_begin}</div>
                    <div className="information-data">{props.time_begin}</div>
                    <span> — </span>
                    <div className="information-time">{props.date_end}</div>
                    <div className="information-time">{props.time_end}</div>

                </div>
            </div>

            <div className="task-description">

                <div className="description-header"><span>Описание задачи:</span></div>
                <div className="description-text">
                    {props.description}
                </div>

            </div>

            <ModifyButtonComponent id={props.id}/>
            <DeleteButtonComponent id={props.id}/>

        </div>
    )
}

export default WatchTaskComponent;