import React from "react";
import logo from "../../../pictures/plus.svg";
import './ButtonComponent.css'

export default function ButtonComponent(){
    return(
        <a className="add-task" href="@">
            <img src={logo} alt="Добавать задачу"/>
        </a>
    )
}