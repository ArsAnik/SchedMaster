import React, {useState} from "react";
import './EditTaskComponent.css';
import {useNavigate} from "react-router-dom";

export default function EditTaskComponent(props){
    const navigate = useNavigate();

    const [name, setName] = useState(props.name);
    const [description, setDescription] = useState(props.description);
    const [begin_date, setBeginDate] = useState(props.date_begin);
    const [end_date, setEndDate] = useState(props.date_end);
    const all_day = 0;

    const handleSubmit = async (event) => {
        event.preventDefault();
        await fetch('/api/task/edit/'+props.id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, description, begin_date, end_date, all_day})
        });
        navigate('/tasksPage');
    };

    return(
        <div className="edit-task">

            <form>
                <div className="task-header">

                    <input type="text"
                           placeholder="Введите название"
                           className="header-modify"
                           value={name}
                           onChange={(event) => setName(event.target.value)}
                    />

                </div>

            <div className="task-header-underline"></div>
            <div className="task-additional">

                <div className="task-modify-elements">
                    <div className="element-data-start">

                        <span className="text-link-color">Дата и время начала: </span>
                        <input
                            type="datetime-local"
                            value={begin_date}
                            onChange={(event) => setBeginDate(event.target.value)}
                            required
                        />
                    </div>

                    <div className="element-data-end">

                        <span className="text-link-color">Дата и время окончания: </span>
                        <input
                            type="datetime-local"
                            value={end_date}
                            onChange={(event) => setEndDate(event.target.value)}
                            required
                        />
                    </div>
                </div>
            </div>

            <div className="task-description">

                <div className="description-header"><span>Описание Задачи:</span></div>
                    <div className="description-text">
                        <textarea
                            className="description-text-modify"
                            placeholder="добавьте описание"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                        </div>
                </div>
                <button onSubmit={handleSubmit} className="save-button" type="submit">Сохранить</button>
            </form>
        </div>
    )
}