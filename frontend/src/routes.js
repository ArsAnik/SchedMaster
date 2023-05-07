import * as pages from "./utils/consts";
import TasksPage from "./pages/tasksPage/tasksPage";
import TaskWatch from "./pages/taskWatchPage/taskWatchPage";
import Error404Page from "./pages/error404Page/error404Page";

export const allRoutes = [
    {
        path: pages.TASKS_PAGE,
        Component: TasksPage
    },
    {
        path: pages.TASK_WATCH_PAGE + ':id',
        Component: TaskWatch
    },
    {
        path: pages.ERROR_404_PAGE,
        Component: Error404Page
    }
]