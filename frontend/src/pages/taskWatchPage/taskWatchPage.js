import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";

import '../ImportantStyles/font.css'
import '../ImportantStyles/reset.css'
import '../ImportantStyles/common.css'

import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import BackButtonComponent from "../../components/CommonElement/BackButtonComponent/BackButtonComponent";
import WatchTaskComponent from "../../components/TaskWatchComponent/WatchTaskComponent/WatchTaskComponent";
import myTime from "../../utils/myTime";

function TaskWatch() {
    const [data, setData] = useState(null);
    const task_id = useParams().id;
    useEffect(() => {

        fetch(`/api/task/${task_id}`).
        then(response => response.json()).
        then(response => setData(response.data));
    }, []);
    return (
        <div className="main-container">
            <HeaderComponent/>
            <BackButtonComponent/>
            {data ?
            <WatchTaskComponent
                name={data.name}
                date_begin={myTime.getShortDate(new Date(data.begin_date))}
                date_end={myTime.getShortDate(new Date(data.end_date))}
                time_begin={myTime.getShortTime(new Date(data.begin_date))}
                time_end={myTime.getShortTime(new Date(data.end_date))}
                description={data.description}
            />
                :
                ''
            }

        </div>
    );
}
export default TaskWatch;