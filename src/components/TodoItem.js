import React from "react";
import "./TodoApp.css";

const TodoItem=({task,index,onToggle,onDelete})=>{
    return(
        <li className="task-item">
            <span className={task.completed?"completed":""}>
                {task.text}
            </span>
            <button
            className={task.completed?"undo-btn":"complete-btn"}
            onClick={()=>onToggle(index)}
            >
            {task.completed?"undo":"complete"}
            </button>
            <button className="delete-btn" onClick={()=>onDelete(index)}>Delete</button>
        </li>
    );
};
export default TodoItem;