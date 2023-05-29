import React from "react";
import './TaskItemComponent.css'

export default function TaskItemComponent(props){
    return(
        <a href={props.link}>
            <div className="task-item">
                <div className="item-time">
                    <p className="item-time-data">{props.date}</p>
                    <p className="item-time-exact">{props.time}</p>
                </div>

                <div className="item-description">
                    <p className="item-description-head">{props.name} </p>
                    <p className="item-description-addition">{props.additionalData}</p>
                </div>
            </div>
        </a>
    )
}