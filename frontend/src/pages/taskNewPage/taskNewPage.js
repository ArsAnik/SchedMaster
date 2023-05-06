import React from 'react';
import ReactDOM from "react-dom"

import '../ImportantStyles/font.css'
import '../ImportantStyles/reset.css'
import '../ImportantStyles/common.css'

import NewTaskComponent from "../../components/TaskNewComponent/NewTaskComponent/NewTaskComponent";
import BackButtonComponent from "../../components/CommonElement/BackButtonComponent/BackButtonComponent";

const inputsNTask =(
    <div className="main-container">
        <NewTaskComponent/>
        <BackButtonComponent/>
    </div>
)

const index = document.getElementById("root")
ReactDOM.render(inputsNTask, index);