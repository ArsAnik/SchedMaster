import React from "react";
import './ModifyButtonComponent.css';
import stylus from '../../../pictures/watch_task_image.svg'
export default function ModifyButtonComponent(props){
    let link = "/task/edit/" + props.id;
    return(
        <div className="modify-button">

            <a href={link}><img src={stylus}/></a>

        </div>
    )
}