import React, {useState, useEffect} from 'react';
import {TASK_WATCH_PAGE} from "../../utils/consts";

import '../ImportantStyles/font.css'
import '../ImportantStyles/reset.css'
import '../ImportantStyles/common.css'

import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import TaskItemComponent from "../../components/TaskComponent/TaskItem/TaskItemComponent";
import ButtonComponent from "../../components/CommonElement/ButtonComponent/ButtonComponent";

const myTime = require('../../utils/myTime');

function TasksPage() {
  const [data, setData] = useState(null);
  const user_id = 3;
  useEffect(() => {

    fetch(`/api/tasksPage/${user_id}`).
        then(response => response.json()).
        then(response => setData(response.own_tasks));
  }, []);
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
                            description={task.description}
                            additionalData={task.name}
                        />
                    )) : ''
                }
            </div>

            <ButtonComponent/>
        </div>
  );
}
export default TasksPage;