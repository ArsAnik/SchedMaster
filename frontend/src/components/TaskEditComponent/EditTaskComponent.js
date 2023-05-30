import React, {useState} from "react";
import './EditTaskComponent.css';

export default function EditTaskComponent(props){
    const [name, setName] = useState(props.name);
    const [description, setDescription] = useState(props.description);
    const [begin_date, setBeginDate] = useState(props.date_begin);
    const [end_date, setEndDate] = useState(props.date_end);
    //const [all_day, setAllDay] = useState(props.);

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

                <div className="additional-information">

                    <a href="@" className="information-data-link">
                        <div className="information-data">15.02.2023</div>
                    </a>
                    <a href="@">
                        <div className="information-time">20:00 - 21:00</div>
                    </a>


                </div>
                <div className="additional-remembering">

                    <a href="@" className="additional-remembering-link">
                        <div className="remembering-word">Напомнить</div>
                        <div className="remembering-times">
                            <div className="remembering-time">
                                за <span>30 минут</span>
                            </div>
                            <div className="remembering-time">
                                за <span>5 минут</span>
                            </div>
                        </div>
                    </a>
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
                <button className="save-button" type="submit">Сохранить</button>
            </form>
        </div>
    )
}