import React, {useEffect, useState} from 'react';
import ReactDOM from "react-dom"

import '../ImportantStyles/font.css'
import '../ImportantStyles/reset.css'
import '../ImportantStyles/common.css'

import BackButtonComponent from "../../components/CommonElement/BackButtonComponent/BackButtonComponent";
import EditTaskComponent from "../../components/TaskEditComponent/EditTaskComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import {useParams} from "react-router-dom";
import myTime from "../../utils/myTime";

function TasksNewPage() {
    const [data, setData] = useState(1);
    const task_id = useParams().id;

    useEffect(() => {
        fetch(`/api/task/${task_id}`).
        then(response => response.json()).
        then(response => setData(response.data[0]));
    }, []);

    if(data){
        return(

        <div className="main-container">
            <HeaderComponent/>
            <BackButtonComponent/>
            <EditTaskComponent
                id={data.id}
                name={data.name}
                date_begin={myTime.getShortDate(new Date(data.begin_date))}
                date_end={myTime.getShortDate(new Date(data.end_date))}
                time_begin={myTime.getShortTime(new Date(data.begin_date))}
                time_end={myTime.getShortTime(new Date(data.end_date))}
                description={data.description}
            />
        </div>
        );
    }
}

export default TasksNewPage;