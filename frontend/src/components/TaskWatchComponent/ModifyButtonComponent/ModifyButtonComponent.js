import React from "react";
import './ModifyButtonComponent.css';
import stylus from '../../../pictures/watch_task_image.svg'
export default function ModifyButtonComponent(){
    return(
        <div className="modify-button">

            <a href="#"><img src={stylus}/></a>

        </div>
    )
}