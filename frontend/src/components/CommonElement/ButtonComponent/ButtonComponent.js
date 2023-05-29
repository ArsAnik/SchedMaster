import React from "react";
import logo from "../../../pictures/plus.svg";
import './ButtonComponent.css'

export default function ButtonComponent(props){
    return(
        <a className="add-task" href={props.link}>
            <img src={logo} alt="Добавать задачу"/>
        </a>
    )
}