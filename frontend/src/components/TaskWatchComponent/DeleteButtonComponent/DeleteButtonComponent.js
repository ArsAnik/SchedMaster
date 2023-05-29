import React from "react";
import './DeleteButtonComponent.css';
import deleteImg from '../../../pictures/delete_task_image.svg'
export default function DeleteButtonComponent(){
    return(
        <div className="delete-button">

            <a href="#"><img src={deleteImg}/></a>

        </div>
    )
}