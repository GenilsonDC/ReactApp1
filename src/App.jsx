import React, { useState } from "react";
import Tasks from "./Components/Tasks";
import './App.css';
import AddTask from "./Components/AddTask";


const App = () => {
 const [tasks, setTasks] = useState([
   {
     id: "1",
   title: "Item 1",
   completed: false,
   },
   {
     id: "2",
     title: "Item 2",
     completed: true,
   },
   
 ]);

 return (
        <>
          <div className="container">
            <AddTask />
             <Tasks tasks={tasks}/>
             </div>
        </>
  );
  
};

export default App;