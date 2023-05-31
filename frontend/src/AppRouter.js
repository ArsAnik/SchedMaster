import React from 'react';
import {Route, Navigate, Routes} from 'react-router-dom'
import PrivateRoute from "./AppPrivateRouter"
import {allPrivateRoutes, allRoutes} from "./routes";
import {ERROR_404_PAGE} from "./utils/consts";

const AppRouter = () => {
    // Получение информации о пользователе из локального хранилища
    const user = localStorage.getItem('user');

    // Проверка аутентификации пользователя
    const isAuthenticated = user != null;
    return (
        <div className="App">
            <Routes>
                {allPrivateRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>} exact/>
                )}
                {allRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>} exact/>
                )}
                <Route path='*' element={<Navigate to={ERROR_404_PAGE}/>} />
            </Routes>
        </div>
    );
};

export default AppRouter;