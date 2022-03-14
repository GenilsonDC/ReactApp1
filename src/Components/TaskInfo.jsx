import React from "react";
import { useParams, useHistory} from "react-router-dom";

import Button from "./Button";
import "./TaskInfo.css";

const TaskInfo =()=>{
    const params = useParams();
    const history = useHistory();
    const handleBackButtonClick =()=>{
          history.goBack();
    };
    return (
        <>
            <div className="back-buton-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            
            <div className="task-info-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ratione quaerat assumenda, libero perferendis explicabo laboriosam
                    iure nesciunt ullam cum atque nemo maiores accusamus.
                    Tempora hic dicta praesentium mollitia dolor culpa?
                </p>
            </div>
        </>
    );

};

export default TaskInfo;