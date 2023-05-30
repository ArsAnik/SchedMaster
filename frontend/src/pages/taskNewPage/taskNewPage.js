import React from 'react';
import ReactDOM from "react-dom"

import '../ImportantStyles/font.css'
import '../ImportantStyles/reset.css'
import '../ImportantStyles/common.css'

import NewTaskComponent from "../../components/TaskNewComponent/NewTaskComponent/NewTaskComponent";
import BackButtonComponent from "../../components/CommonElement/BackButtonComponent/BackButtonComponent";

function TasksNewPage() {
    return (
        <div className="main-container">
            <NewTaskComponent/>
            <BackButtonComponent/>
        </div>
    );
}

export default TasksNewPage;