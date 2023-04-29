import React from 'react';
import ReactDOM from "react-dom"

import '../ImportantStyles/font.css'
import '../ImportantStyles/reset.css'
import '../ImportantStyles/common.css'

import BackButtonComponent from "../../components/TaskModifyComponent/BackButtonComponent/BackButtonComponent";
import WatchTaskComponent from "../../components/TaskWatchComponent/WatchTaskComponent/WatchTaskComponent";
import HeaderComponent from "../../components/TaskComponent/HeaderComponent/HeaderComponent";

const inputsMTask =(
    <div className="main-container">
        <HeaderComponent />
        <BackButtonComponent/>
        <WatchTaskComponent/>
    </div>
)

const index = document.getElementById("root")
ReactDOM.render(inputsMTask, index);