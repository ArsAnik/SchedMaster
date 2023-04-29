import {ERROR_404_PAGE, TASKS_PAGE} from "./utils/consts";
import TasksPage from "./pages/tasksPage/tasksPage";
import Error404Page from "./pages/error404Page/error404Page";

export const allRoutes = [
    {
        path: TASKS_PAGE + '/:id',
        Component: TasksPage
    },
    {
        path: ERROR_404_PAGE,
        Component: Error404Page
    }
]