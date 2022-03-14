import React from "react";
import Task from "./Task";

const Tasks = ({tasks, handleTaskClick, handTaskDelet}) => {
    return(
        <div>
            {tasks.map((task) => (
                <Task key={task.id}
                 task={task} 
                handleTaskClick = {handleTaskClick}
                handTaskDelet={handTaskDelet}/>
            ))}
        </div>
    );
};

export default Tasks;