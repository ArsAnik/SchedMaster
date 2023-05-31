import React, {useState} from "react";
import './headerTSC-style.css'
import './HeaderComponent.css'
import logo from '../../pictures/logo.svg';

export default function HeaderComponent(props){
        return(
            <header className="header">
                <div className="header-text">
                    <div className="header-text-task active">

                        <a className="header-text-task-button" href="/tasksPage">Задачи</a>

                    </div>

                </div>

                <a className="open-personalWindow without-avatar" href="/personalArea">
                    <span className="personLetter">Я</span>

                </a>

                <div className="header-line">

                </div>
            </header>
        )
}