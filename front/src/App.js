import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/api/tasksPage/3').
        then(response => response.json()).
        then(response => setData(response.own_tasks));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            {
                data ? data.map((task) => (
                    <div>
                        <p> {task.name} </p>
                        <p> {task.description} </p>
                        <p> {task.begin_date} </p>
                        <p> {task.end_date} </p>
                    </div>
                )) : 0
            }
        </p>
          <p>
              {
                  //data.own_tasks
              }
          </p>
          <p>
              {
                  //data.day
              }
          </p>
      </header>
    </div>
  );
}

export default App;
