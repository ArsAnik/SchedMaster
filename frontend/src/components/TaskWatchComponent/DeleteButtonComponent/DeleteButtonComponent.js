import React from "react";
import './DeleteButtonComponent.css';
import deleteImg from '../../../pictures/delete_task_image.svg'
function DeleteButtonComponent(props){
    async function handleClick(e) {
        e.preventDefault();
        let id = props.id;

        if (window.confirm('Вы хотите удалить эту задачу?')) {
            fetch('http://localhost:3001/api/task/' + id, {
                method: 'DELETE'
            }).then(() =>{
                window.open('/');
            });
        }
    }

    return(
        <div className="delete-button" onClick={handleClick}>

            <a href="#"><img src={deleteImg}/></a>

        </div>
    )
}

export default DeleteButtonComponent;