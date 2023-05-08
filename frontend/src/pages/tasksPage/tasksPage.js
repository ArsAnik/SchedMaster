import React, {useState, useEffect} from 'react';

import '../ImportantStyles/font.css'
import '../ImportantStyles/reset.css'
import '../ImportantStyles/common.css'

import HeaderComponent from "../../components/TaskComponent/HeaderComponent/HeaderComponent";
import TaskItemComponent from "../../components/TaskComponent/TaskItem/TaskItemComponent";
import ButtonComponent from "../../components/TaskComponent/ButtonComponent/ButtonComponent";
import {useParams} from "react-router-dom";

const myTime = require('../../utils/myTime');

function TasksPage() {
  const [data, setData] = useState(null);
  const user_id = useParams().id;
  useEffect(() => {

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

            <ButtonComponent/>

        </div>
    </div>
  );
}
export default TasksPage;