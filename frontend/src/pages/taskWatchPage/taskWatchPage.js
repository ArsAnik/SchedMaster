import React, {useState, useEffect} from 'react';
import {BrowserRouter as Redirect, Navigate, Route, Routes, useParams} from 'react-router-dom';

import '../ImportantStyles/font.css'
import '../ImportantStyles/reset.css'
import '../ImportantStyles/common.css'

import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import BackButtonComponent from "../../components/CommonElement/BackButtonComponent/BackButtonComponent";
import WatchTaskComponent from "../../components/TaskWatchComponent/WatchTaskComponent/WatchTaskComponent";
import myTime from "../../utils/myTime";
import {ERROR_404_PAGE} from "../../utils/consts";

export const TaskWatch = () => {
    const [data, setData] = useState(1);
    const task_id = useParams().id;

    useEffect(() => {
        fetch(`/api/task/${task_id}`).
        then(response => response.json()).
        then(response => setData(response.data[0]));
    }, []);

    if(data){
        return (
            <div className="main-container">
                <HeaderComponent/>
                <BackButtonComponent/>
                    <WatchTaskComponent
                        id={data.id}
                        name={data.name}
                        date_begin={myTime.getFullDate(new Date(data.begin_date))}
                        date_end={myTime.getFullDate(new Date(data.end_date))}
                        description={data.description}
                    />
                }

            </div>
        );
    }else{
        return(
            <Navigate to={ERROR_404_PAGE}/>
        );
    }

}
export default TaskWatch;