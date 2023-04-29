import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {allRoutes} from "./routes";
import {ERROR_404_PAGE} from "./utils/consts";

const AppRouter = () => {
    return (
        <Routes>
            {allRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path='*' element={<Navigate to={ERROR_404_PAGE}/>} />
        </Routes>
    );
};

export default AppRouter;