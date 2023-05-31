import React, {useEffect, useState} from 'react';

import '../ImportantStyles/font.css'
import '../ImportantStyles/reset.css'
import '../ImportantStyles/common.css'

import BackButtonComponent from "../../components/CommonElement/BackButtonComponent/BackButtonComponent";
import EditTaskComponent from "../../components/TaskEditComponent/EditTaskComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import {Navigate, useParams} from "react-router-dom";
import myTime from "../../utils/myTime";
import {ERROR_404_PAGE} from "../../utils/consts";

function TasksEditPage() {
    const task_id = useParams().id;

    const user_id = localStorage.getItem('user');


    if(!user_id){
        return(
            <Navigate to={ERROR_404_PAGE}/>
        );
    }
    return(

        <div className="main-container">
            <HeaderComponent/>
            <BackButtonComponent/>
            <EditTaskComponent
                id={task_id}
            />
        </div>
        );
}

export default TasksEditPage;