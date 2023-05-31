import React, {useState, useEffect} from 'react';
import {ERROR_404_PAGE, TASK_WATCH_PAGE} from "../../utils/consts";

import '../ImportantStyles/font.css'
import '../ImportantStyles/reset.css'
import '../ImportantStyles/common.css'

import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import TaskItemComponent from "../../components/TaskComponent/TaskItem/TaskItemComponent";
import ButtonComponent from "../../components/CommonElement/ButtonComponent/ButtonComponent";
import {Navigate} from "react-router-dom";

const myTime = require('../../utils/myTime');

const user_id = localStorage.getItem('user');
function TasksPage() {
  const [data, setData] = useState(null);

    const user_id = localStorage.getItem('user');

  useEffect(() => {
    fetch(`/api/tasksPage/${user_id}`).
        then(response => response.json()).
        then(response => setData(response.own_tasks));
  }, []);
    if(!user_id){
        return(
            <Navigate to={ERROR_404_PAGE}/>
        );
    }
    
  return (
        <div className="main-container">

            <HeaderComponent />

            <div className="tasks-items">
                {
                    data ? data.map((task) => (
                        <TaskItemComponent
                            link={TASK_WATCH_PAGE + task.id}
                            date={myTime.getShortDate(new Date(task.begin_date))}
                            time={myTime.getShortTime(new Date(task.begin_date))}
                            name={task.name}
                            additionalData={task.description}
                        />
                    )) : ''
                }
            </div>

            <ButtonComponent link={"/task/create/"}/>
        </div>
  );
}
export default TasksPage;