import React, {useState} from "react";
import './NewTaskComponent.css';
import clock from '../../../pictures/add-task-clock.svg'
import bell from '../../../pictures/add-task-bell.svg'
export default function NewTaskComponent(){
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [begin_date, setBeginDate] = useState('11.11.2002');
    const [end_date, setEndDate] = useState('11.11.2002');
    const [all_day, setAllDay] = useState(0);
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
                    />

                </div>

                <div className="task-header-line"></div>

                <div className="task-modify-elements">

                    <div className="element-data-start">

                        <span className="text-link-color">Дата и время начала: </span>
                        <input type="datetime-local" />
                    </div>

                    <div className="element-data-end">

                        <span className="text-link-color">Дата и время окончания: </span>
                        <input type="datetime-local" />
                    </div>

                    <div className="element-notification-whole-day">

                        <label>
                            <a href="@"><img src={clock} /></a>
                            <span className="text-link-color">Весь день</span>
                            <input type="checkbox"/>

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
                        >
                        </textarea>
                    </div>

                </div>
                <button className="save-button" type="submit">Сохранить</button>
            </form>

        </div>
    )
}