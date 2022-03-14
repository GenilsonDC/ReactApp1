import React from "react";
import {CgClose, CgInfo} from "react-icons/cg";
import { useHistory } from "react-router-dom";

import "./Task.css";


 const Task = ( {task, handleTaskClick, handTaskDelet} ) => {
     const history = useHistory();
     const handTaskInfoClick = ()=>{
         history.push(`/${task.title}`);
     }
     return(
         <div
          className="task-container"
          style={task.completed ? {borderLeft: "6px  solid   rgba(0, 253, 219, 0.904)"} : {}}>

              <div className = "task-title" onClick={() => handleTaskClick(task.id)}> 
            {task.title} </div>
         
         <div className="buttons-container">

            <button className="button-info" onClick={handTaskInfoClick}>
                <CgInfo />
            </button>

            <button className="button-delete"
                onClick={()=>handTaskDelet(task.id)}><CgClose />
            </button>          
         
         </div>
         </div>
     );
  

 };
 export default Task;