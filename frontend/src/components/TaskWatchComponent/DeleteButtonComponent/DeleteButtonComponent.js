import React from "react";
import './DeleteButtonComponent.css';
import deleteImg from '../../../pictures/delete_task_image.svg'
import {TASKS_PAGE} from "../../../utils/consts";
import {Navigate, useNavigate} from "react-router-dom";
function DeleteButtonComponent(props){

    const navigate = useNavigate();
    function handleClick(e) {
        e.preventDefault();
        let id = props.id;

        if (window.confirm('Вы хотите удалить эту задачу?')) {
            fetch('http://localhost:3001/api/task/' + id, {
                method: 'DELETE'
            }).then();
            navigate('/tasksPage');
        }
    }

    return(
        <div className="delete-button" onClick={handleClick}>

            <a href="#"><img src={deleteImg}/></a>

        </div>
    )
}

export default DeleteButtonComponent;