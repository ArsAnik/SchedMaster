import React from 'react';
import ReactDOM from "react-dom"

import '../ImportantStyles/font.css'
import '../ImportantStyles/reset.css'
import '../ImportantStyles/common.css'

import NewTaskComponent from "../../components/TaskNewComponent/NewTaskComponent/NewTaskComponent";
import BackButtonComponent from "../../components/CommonElement/BackButtonComponent/BackButtonComponent";
import {Navigate} from "react-router-dom";
import {ERROR_404_PAGE} from "../../utils/consts";

function TasksNewPage() {
    const user_id = localStorage.getItem('user');
    if(!user_id){
        return(
            <Navigate to={ERROR_404_PAGE}/>
        );
    }
    return (
        <div className="main-container">
            <NewTaskComponent/>
            <BackButtonComponent/>
        </div>
    );
}

export default TasksNewPage;