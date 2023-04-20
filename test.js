import logo from "./front/src/pictures/plus.svg";

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