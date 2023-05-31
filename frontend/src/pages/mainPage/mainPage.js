import React, {useState} from 'react';

import '../ImportantStyles/font.css'
import '../ImportantStyles/reset.css'
import '../ImportantStyles/common.css'
import './mainPage.css.css'

function mainPage() {

    return (
        <div className="main-body">
            <div>
                <img className="image" src="../pictures/mainPagePic.svg">
            </div>

            <div className="head">
                <div className="header-text-welcome">
                    <h1>Welcome to the super world of</h1>
                </div>

                <div className="header-text-head">Sched-Master</div>
                <div className="head-support-text">удобство начинается здесь</div>

            </div>
            <div className="header-come">

                <div className="enter">
                    <a className="coming" href="/"> Войти</a>
                </div>
                <div className="registre">
                    <a className="coming" href="/registration"> Регистрация</a>
                </div>

            </div>

        </div>
    );
}

export default mainPage;