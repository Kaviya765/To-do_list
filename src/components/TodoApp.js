import React,{useState,useEffect} from "react";
import TodoItem from "./TodoItem";
import "./TodoApp.css";

const TodoApp=()=>{
    const [task,setTask]=useState("");
    const[tasks,setTasks]=useState(()=>JSON.parse(localStorage.getItem("tasks"))||[]);
    const[filter,setFilter]=useState("all");
    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(tasks));

    },[tasks]);

    const addTask=()=>{
        if(task.trim()==="")return alert("Task cannot be empty");
        setTasks([...tasks,{text:task,completed:false}]);
        setTask("");
    };
    const deleteTask=(index)=>{
        const updatedTasks=tasks.filter((_,i)=>i!==index);
        setTasks(updatedTasks);
    };
    const tooglecompletion=(index)=>{
        const updatedTasks=[...tasks];
        updatedTasks[index].completed=!updatedTasks[index].completed;
        setTasks(updatedTasks);
    };
    const filteredTasks=tasks.filter((t)=>{
        if(filter==="completed")return t.completed;
        if(filter==="pending")return !t.completed;
        return true;
    });
    return(
        <div className="todo-container">
            <h1>To-Do List</h1>
            <div className="input-section">
                <input type="text" value={task}placeholder="Enter a task" onChange={(e)=>setTask(e.target.value)}
                />
                <button onClick={addTask}>Add</button>
            </div>
            <div className="filter-buttons">
                <button onClick={()=>setFilter("all")}>All</button>
                <button onClick={()=>setFilter("completed")}>Completed</button>
                <button onClick={()=>setFilter("pending")}>Pending</button>
            </div>
            <ul className="task-list">
                {filteredTasks.map((task,index)=>(
                    <TodoItem
                    key={index}
                    task={task}
                    index={index}
                    onToggle={tooglecompletion}
                    onDelete={deleteTask}/>

                ))}
            </ul>
        </div>
    );
};
    export default TodoApp;
