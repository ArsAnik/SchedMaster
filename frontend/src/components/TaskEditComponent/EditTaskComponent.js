import React, {useEffect, useState} from "react";
import './EditTaskComponent.css';
import {useNavigate} from "react-router-dom";
import myTime from "../../utils/myTime";

export default function EditTaskComponent(props){
    const navigate = useNavigate();
    const task_id = props.id;

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [begin_date, setBeginDate] = useState("");
    const [end_date, setEndDate] = useState("");
    const all_day = 0;

    useEffect(() => {
        fetch(`/api/task/${task_id}`).
        then(response => response.json()).
        then(response => {
            setName(response.data[0].name);
            setDescription(response.data[0].description);
            setBeginDate(response.data[0].begin_date);
            setEndDate(response.data[0].end_date);
        });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await fetch(`/api/task/edit/${task_id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, description, begin_date, end_date, all_day})
        });
        navigate('/tasksPage');
    };

    if(window.screen.width > 1000){
        return(
            <div className="edit-task">

                <form onSubmit={handleSubmit}>
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
                    <button  className="save-button" type="submit">Сохранить</button>
                </form>
            </div>
        )
    }
    else
    {
        return(
            <div className="edit-task-mobile">
                <form className="task-header-form" onSubmit={handleSubmit}>

                    <div className="task-header">

                        <input
                            type ="text"
                            value="Наглаживание кота"
                            className="header-modify"
                        />

                    </div>

                <div className="task-header-underline"></div>
                <div className="task-additional">

                    <div className="additional-information">
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
                            />
                        </div>

                    </div>

                        <button className="save-button-container" type="submit">
                            <div className="save-button">
                                Сохранить
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}