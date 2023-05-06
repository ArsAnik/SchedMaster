import React from 'react';
import ReactDOM from "react-dom"

import '../ImportantStyles/font.css'
import '../ImportantStyles/reset.css'
import '../ImportantStyles/common.css'

import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import BackButtonComponent from "../../components/CommonElement/BackButtonComponent/BackButtonComponent";
import WatchTaskComponent from "../../components/TaskWatchComponent/WatchTaskComponent/WatchTaskComponent";

const inputsWTask =(
    <div className="main-container">
        <HeaderComponent/>
        <BackButtonComponent/>
        <WatchTaskComponent/>
    </div>
)

const index = document.getElementById("root")
ReactDOM.render(inputsWTask, index);