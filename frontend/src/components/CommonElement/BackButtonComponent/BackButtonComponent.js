import React from "react";
import './BackButtonComponent.css';
import {TASKS_PAGE} from "../../../utils/consts";

export default function BackButtonComponent(){
    return(
        <div className="back-button">
            <a href={TASKS_PAGE}>
                <svg className="arrow" width="53" height="58" viewBox="0 0 53 58" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path className="arrow-fill"
                          d="M44.5001 5.75218C44.5076 1.93092 40.1985 -0.348342 36.8064 1.68265L2.55432 22.1911C-0.786774 24.1915 -0.732144 28.8876 2.65305 30.6782L36.8299 48.7559C40.2151 50.5465 44.4175 48.1021 44.4249 44.3383L44.5001 5.75218Z"/>
                    <path className="arrow-border"
                          d="M37.5895 2.93174L3.33737 23.4402C0.99861 24.8405 1.03685 28.1277 3.40649 29.3812L37.5833 47.4588C39.953 48.7122 42.8947 47.0012 42.8998 44.3665L42.9751 5.78042C42.9803 3.10554 39.9639 1.51005 37.5895 2.93174Z"/>
                </svg>
            </a>
        </div>
    )
}