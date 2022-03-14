import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid'
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import TaskInfo from "./Components/TaskInfo";


import './App.css';

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

  const handleTaskClick=(taskId)=>{
    const newTasks = tasks.map((task) =>{
      if(task.id == taskId) return { ...task, completed: !task.completed }

      return task;
    });

    setTasks(newTasks)
  };

 const handleTaskAddition = (taskTitle)=>{
   const newTasks = [... tasks, {
     title: taskTitle,
     id: uuidv4(),
     completed: false,
   },
  ];
    setTasks(newTasks);
 };

 const handTaskDelet = (taskId)=>{
   const newTasks = tasks.filter(task=>task.id != taskId)
   setTasks(newTasks);
 };

 return (
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route
             path="/" 
              exact
               render={() => (
                                <div>
                                  <AddTask handleTaskAddition = {handleTaskAddition}/>
                                  <Tasks
                                  tasks={tasks}
                                  handleTaskClick={handleTaskClick}
                                  handTaskDelet={handTaskDelet}
                                  />
                                </div>

                               )}
              />
             <Route path="/:taskTitle" exact component={TaskInfo}/>
          </div>         
        </BrowserRouter>       
        );
  
};

export default App;