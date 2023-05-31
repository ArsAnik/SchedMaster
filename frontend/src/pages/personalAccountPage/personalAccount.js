import React, {useEffect, useState} from 'react';

import '../ImportantStyles/font.css'
import '../ImportantStyles/reset.css'
import '../ImportantStyles/common.css'
import './personalAreaStyle.css'
import logo from '../../pictures/personalAccount.svg'
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {ERROR_404_PAGE} from "../../utils/consts";

function PersonalArea(key) {

    const navigate = useNavigate();

    const [data, setData] = useState(1);
    const [switcher, setSwitcher] = useState(1);
    const [login, setLogin] = useState("");
    const [group_name, setGroup_name] = useState("");
    const [log1, setLog1] = useState("");
    const [gname1, setGname] = useState("");

    const user_id = localStorage.getItem('user');

    useEffect(() => {
        fetch(`/api/user/`+user_id).
        then(response => response.json()).
        then(response => {
            setLogin(response.data[0].login );
            setGroup_name(response.data[0].group_name ? response.data[0].group_name : "1111-111111D");
        });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSwitcher(1);
        await fetch('/api/user/edit/'+user_id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ login, group_name })
        });
        console.log("handleSubmit");
        navigate(`/tasksPage`);
    };
    if(!user_id){
        return(
            <Navigate to={ERROR_404_PAGE}/>
        );
    }

        return (switcher ?
        <div className="main-container">
            <div className="account-wrapper" >
                <img className="background-image-svg" src={logo} alt = "ufef"/>
                <div className="account-block">

                    <a className="avatar-block without-avatar">
                        <span className="personLetter">Я</span>
                    </a>

                    <div className="information">
                        <span className="information-name">{login}</span>
                        <span className="information-group">{group_name}</span>
                    </div>

                    <a className="information-change-button" onClick={(event) => {
                    setSwitcher(0);
                    setLog1(login);
                    setGname(group_name);
                    }}>изменить</a>

                    <a onClick={(event) => {
                        localStorage.clear();
                        navigate(`/`);
                    }}>
                        <div className="account-exit">

                            <p className="exit-button">Выйти</p>

                        </div>
                    </a>

                </div>
            </div>

            <div className="back-button-pers">
                <a onClick={(event) => {
                    navigate(`/tasksPage`);
                }}>
                    <svg className="arrow" width="53" height="58" viewBox="0 0 53 58" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path className="arrow-fill"
                              d="M44.5001 5.75218C44.5076 1.93092 40.1985 -0.348342 36.8064 1.68265L2.55432 22.1911C-0.786774 24.1915 -0.732144 28.8876 2.65305 30.6782L36.8299 48.7559C40.2151 50.5465 44.4175 48.1021 44.4249 44.3383L44.5001 5.75218Z"/>
                        <path className="arrow-border"
                              d="M37.5895 2.93174L3.33737 23.4402C0.99861 24.8405 1.03685 28.1277 3.40649 29.3812L37.5833 47.4588C39.953 48.7122 42.8947 47.0012 42.8998 44.3665L42.9751 5.78042C42.9803 3.10554 39.9639 1.51005 37.5895 2.93174Z"/>
                    </svg>
                </a>
            </div>
        </div>
            :
            <div className="main-container">
                <div className="account-wrapper" >
                    <img className="background-image-svg" src={logo} alt = "ufef"/>
                    <div className="account-block">
                        <a className="avatar-block without-avatar">
                            <span className="personLetter">Я</span>
                        </a>
                        <form onSubmit={handleSubmit}>
                            <div className="information">
                                <input type="text"
                                       placeholder="Введите логин"
                                       className="information-name"
                                       value={login}
                                       onChange={(event) => setLogin(event.target.value)}
                                />
                                <input type="text"
                                       placeholder="Введите название группы"
                                       className="information-group"
                                       value={group_name}
                                       onChange={(event) => setGroup_name(event.target.value)}
                                />
                            </div>
                            <button className="exit-button" type="submit"><div className="account-exit">Сохранить</div></button>
                        </form>



                    </div>
                </div>

                    <div className="back-button">
                        <a onClick={(event) => {
                            setLogin(log1);
                            setGroup_name(gname1);
                            setSwitcher(1);
                        }}>
                            <svg className="arrow" width="53" height="58" viewBox="0 0 53 58" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path className="arrow-fill"
                                      d="M44.5001 5.75218C44.5076 1.93092 40.1985 -0.348342 36.8064 1.68265L2.55432 22.1911C-0.786774 24.1915 -0.732144 28.8876 2.65305 30.6782L36.8299 48.7559C40.2151 50.5465 44.4175 48.1021 44.4249 44.3383L44.5001 5.75218Z"/>
                                <path className="arrow-border"
                                      d="M37.5895 2.93174L3.33737 23.4402C0.99861 24.8405 1.03685 28.1277 3.40649 29.3812L37.5833 47.4588C39.953 48.7122 42.8947 47.0012 42.8998 44.3665L42.9751 5.78042C42.9803 3.10554 39.9639 1.51005 37.5895 2.93174Z"/>
                            </svg>
                        </a>
                    </div>
            </div>);
}

export default PersonalArea;