import React, {useState} from 'react';

import '../ImportantStyles/font.css'
import '../ImportantStyles/reset.css'
import '../ImportantStyles/common.css'
import './login.css'
import reg from '../../pictures/registration_krakozyabri.svg'
import link from '../../pictures/registration-link-account.svg'
import {useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [id, setId] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        await fetch('/api/register/enter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        }).then(response => response.json()).
        then(response => response.id ? navigate(`/tasksPage/`):1);
    };
    return (
        <div className="main-container">
            <div className="header-enter">
                <div>
                    <img src={reg} className="image"/>
                </div>

                <a href="/">
                    <svg className="back-button-svg" width="44" height="50" viewBox="0 0 44 50" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path className="back-button-fill"
                              d="M43.4602 5.32472C43.4675 1.3894 39.1361 -1.0115 35.8027 1.08011L2.84901 21.7572C-0.375076 23.7802 -0.246534 28.5203 3.08244 30.3656L35.9637 48.592C39.2927 50.4373 43.3807 48.0344 43.3878 44.2282L43.4602 5.32472Z"/>
                        <path className="back-button-border"
                              d="M41.9602 5.32193C41.9653 2.5672 38.9334 0.886576 36.5999 2.35071L3.64625 23.0278C1.38939 24.4439 1.47937 27.762 3.80966 29.0537L36.6909 47.2801C39.0212 48.5718 41.8828 46.8898 41.8878 44.2254L41.9602 5.32193Z"/>
                    </svg>
                </a>


                <img src={link} className="person-account-link"/>
            </div>
            <div className="enter-window">

                <div className="description-enter">Вход</div>
                <div className="inputs-container">
                    <form onSubmit={handleSubmit}>

                        <div className="input-something">
                            <input
                                placeholder="почта"
                                className="task-header-input"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>
                        <div className="input-something">
                            <input
                                //type="password"
                                placeholder="пароль"
                                className="task-header-input"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>
                        <button className="continue-button" type="submit">Войти</button>
                    </form>
                </div>


            </div>

        </div>
    );
}

export default Login;