import React from 'react';
import error from '../../pictures/error.png';
import './error404Page.css';

const Error404Page = () => {
    return (
        <div className="error_block">
            <img className="error_img" src={error}/>
            <h3 className="error_head">Что-то пошло не так!</h3>
            <span className="error_text">Не удается загрузить страницу. Повторите попытку поздне.</span>
            <a href="/" className="error_button">Назад</a>
        </div>
    );
};

export default Error404Page;