import React, {useState, useEffect} from 'react';

import '../ImportantStyles/font.css'
import '../ImportantStyles/reset.css'
import '../ImportantStyles/common.css'

import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import TaskItemComponent from "../../components/TaskComponent/TaskItem/TaskItemComponent";
import ButtonComponent from "../../components/CommonElement/ButtonComponent/ButtonComponent";

const myTime = require('../../utils/myTime');

function TasksPage() {
  const [data, setData] = useState(null);
  useEffect(() => {
      const queryParameters = new URLSearchParams(window.location.search)
      const user_id = queryParameters.get("user_id")
    fetch(`/api/tasksPage/${user_id}`).
        then(response => response.json()).
        then(response => setData(response.own_tasks));
  }, []);
  return (
    <div className="App">
        <div className="main-container">

            <HeaderComponent />

            <div className="tasks-items">
                {
                    data ? data.map((task) => (
                        <TaskItemComponent date={myTime.getShortDate(new Date(task.begin_date))} time={myTime.getShortTime(new Date(task.begin_date))} description={task.description} additionalData={task.name}/>
                    )) : 0
                }
            </div>

            <ButtonComponent/>

        </div>
    </div>
  );
}
export default TasksPage;

// import React, {useState, useEffect} from 'react';
//
// import HeaderComponent from "./pages/tasksPage/HeaderComponent";
// import TaskItemComponent from "./pages/tasksPage/TaskItemComponent";
//
// import './pages/tasksPage/style.css'
// import './pages/tasksPage/font.css'
// import logo from './pictures/plus.svg'
// import './pages/tasksPage/headerTSC-style.css'
// import './pages/tasksPage/reset.css'
// import './pages/tasksPage/common.css'
//
// const myTime = require('./utils/myTime');
//
// function App() {
//   const [data, setData] = useState(null);
//   useEffect(() => {
//       const queryParameters = new URLSearchParams(window.location.search)
//       const user_id = queryParameters.get("user_id")
//     fetch(`/api/tasksPage/${user_id}`).
//         then(response => response.json()).
//         then(response => setData(response.own_tasks));
//   }, []);
//   return (
//     <div className="App">
//         <div className="main-container">
//
//             <HeaderComponent />
//
//             <div className="tasks-items">
//                 {
//                     data ? data.map((task) => (
//                         <TaskItemComponent date={myTime.getShortDate(new Date(task.begin_date))} time={myTime.getShortTime(new Date(task.begin_date))} description={task.description} additionalData={task.name}/>
//                     )) : 0
//                 }
//             </div>
//
//             <a className="add-task" href="@">
//                 <img src={logo} alt="Добавать задачу"/>
//             </a>
//
//         </div>
//     </div>
//   );
// }
//
// export default App;