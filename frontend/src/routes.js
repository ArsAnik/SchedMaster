import * as pages from "./utils/consts";
import TasksPage from "./pages/tasksPage/tasksPage";
import TaskWatch from "./pages/taskWatchPage/taskWatchPage";
import Error404Page from "./pages/error404Page/error404Page";
import taskNewPage from "./pages/taskNewPage/taskNewPage";
import taskEditPage from "./pages/taskEditPage/taskEditPage";
import registration from "./pages/registration/registration";
import login from "./pages/loginPage/login";
import mainPage from "./pages/mainPage/mainPage";
import personalAccount from "./pages/personalAccountPage/personalAccount";

export const allRoutes = [
    {
        path: pages.MAIN_PAGE,
        Component: mainPage
    },
    {
        path: pages.ERROR_404_PAGE,
        Component: Error404Page
    },
    {
        path: pages.REGISTRATION,
        Component: registration
    },
    {
        path: pages.LOGIN,
        Component: login
    },
    {
        path: pages.PERSONAL_ACCOUNT,
        Component: personalAccount
    }
]

export const allPrivateRoutes = [
    {
        path: pages.TASKS_PAGE,
        Component: TasksPage
    },
    {
        path: pages.TASK_WATCH_PAGE + ':id',
        Component: TaskWatch
    },
    {
        path: pages.TASK_NEW_PAGE,
        Component: taskNewPage
    },
    {
        path: pages.TASK_EDIT_PAGE + ':id',
        Component: taskEditPage
    },
]