import React, {useState, useEffect} from 'react';
import FComponent from "./FComponent";
import CComponent from "./CComponent";
import Menu from "./Menu";
import './style.css'
import './font.css'
import logo from './pictures/plus.svg'
import './headerTSC-style.css'
import './reset.css'
import './common.css'
const myTime = require('./myTime');

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
      const queryParameters = new URLSearchParams(window.location.search)
      const user_id = queryParameters.get("user_id")
    fetch(`/api/tasksPage/${user_id}`).
        then(response => response.json()).then(response => setData(response.own_tasks));
  }, []);
  return (
    <div className="App">
        <div className="main-container">

            <header className="header">
                <div className="header-text">
                    <div className="header-text-task active">

                        <a className="header-text-task-button" href="@">Задачи</a>

                    </div>

                    <div className="header-text-schedule">
                        <div className="header-text-schedule-container">

                            <a className="header-text-schedule-button" href="@">Расписание</a>
                        </div>

                    </div>

                    <div className="header-text-calendar">

                        <a className="header-text-calendar-button" href="@">Календарь</a>

                    </div>

                </div>

                <a className="open-personalWindow without-avatar" href="@">
                    <span className="personLetter">Я</span>

                </a>

                <div className="header-line">

                </div>
            </header>

            <div className="tasks-items">

                {
                    data ? data.map((task) => (
                        <a href="@">
                            <div className="task-item">
                                <div className="item-time">
                                    <p className="item-time-data">{myTime.getShortDate(new Date(task.begin_date))}</p>
                                    <p className="item-time-exact">{myTime.getShortTime(new Date(task.begin_date))}</p>
                                </div>

                                <div className="item-description">
                                    <p className="item-description-head"> {task.name} </p>
                                    <div className="item-description-addition-box">
                                        <p className="item-description-addition">{task.description}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    )) : 0
                }


            </div>

            <a className="add-task" href="@">
                <img src={logo} alt="Добавать задачу"/>
            </a>

        </div>
    </div>
  );
}

export default App;
