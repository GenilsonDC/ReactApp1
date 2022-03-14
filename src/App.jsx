import React, { useEffect, useState } from "react";
import {v4 as uuidv4} from 'uuid'
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";

import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import TaskInfo from "./Components/TaskInfo";


import './App.css';

const App = () => {
 const [tasks, setTasks] = useState([
   
   
 ]);

 useEffect(()=>{
   const fetchTasks = async()=>{
     const{data}= await axios.get(
       "https://jsonplaceholder.cypress.io/todos?_limit=10"
     );
     setTasks(data);
   };
   fetchTasks();

 }, []);

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