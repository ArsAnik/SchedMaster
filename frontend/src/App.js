import React, {useState, useEffect} from 'react';

import HeaderComponent from "./HeaderComponent";
import TaskItemComponent from "./TaskItemComponent";

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
        then(response => response.json()).
        then(response => setData(response.own_tasks));
  }, []);
  return (
    <div className="App">
        <div className="main-container">

            <HeaderComponent />

            <div className="tasks-items">
                {
                    data ? data.map((task) => (
                        <TaskItemComponent date={myTime.getShortDate(new Date(task.begin_date))} time={myTime.getShortTime(new Date(task.begin_date))} description={task.description} additionalData={task.name}/>
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
