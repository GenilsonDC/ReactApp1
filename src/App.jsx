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

 const handleTaskAddition = (taskTitle)=>{
   const newTasks = [... tasks, {
     title: taskTitle,
     id: Math.random(10),
     completed: false,
   },
  ];
    setTasks(newTasks);
 }

 return (
        <>
          <div className="container">
            <AddTask handleTaskAddition = {handleTaskAddition}/>
             <Tasks tasks={tasks}/>
             </div>
        </>
  );
  
};

export default App;