import React, {useState} from "react";
import './NewTaskComponent.css';
import clock from '../../../pictures/add-task-clock.svg'
import bell from '../../../pictures/add-task-bell.svg'
import {useNavigate} from "react-router-dom";
export default function NewTaskComponent(){
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [begin_date, setBeginDate] = useState('');
    const [end_date, setEndDate] = useState('');
    const [all_day, setAllDay] = useState(false);
    const FK_user = 5;

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(JSON.stringify({ name, description, begin_date, end_date, all_day, FK_user}));
        await fetch('/api/task/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, description, begin_date, end_date, all_day, FK_user})
        });
        navigate('/tasksPage');
    };

    return(
        <div className="new-task">

            <form onSubmit={handleSubmit}>
                <div className="task-header">

                    <input
                        placeholder="Введите название"
                        className="task-header-input"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />

                </div>

                <div className="task-header-line"></div>

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

                    <div className="element-notification-whole-day">

                        <label>
                            <a href="@"><img src={clock} /></a>
                            <span className="text-link-color">Весь день</span>
                            <input
                                type="checkbox"
                                checked={all_day}
                                onChange={(event) => setAllDay(event.target.checked)}
                            />

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
                        <textarea
                            className="task-description-text"
                            placeholder="добавьте описание"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                            required
                        >
                        </textarea>
                    </div>

                </div>
                <button className="save-button" type="submit">Сохранить</button>
            </form>

        </div>
    )
}