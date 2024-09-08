import { useEffect, useState } from "react"

export function Todo(){
    const [tasks, setTasks] = useState(["Go to Gym", "Study DSA","Go for a walk"]);
    const [newTasks, setNewTask] = useState("")


    function handelInputChange(e){
        setNewTask(e.target.value);
    }

    function addTask(){
        if(newTasks.trim() !== ""){
            setTasks(t => [...t,newTasks])
            setNewTask("") 
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((elem,i) => i !== index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index){
        const updatedTask = [...tasks];
        if(index > 0){
            [updatedTask[index],updatedTask[index-1]] =
            [updatedTask[index-1],updatedTask[index]]
        }
        setTasks(updatedTask)
    }
    function moveTaskDown(index){
        const updatedTask = [...tasks];
        if(index + 1 < tasks.length){
            [updatedTask[index],updatedTask[index+1]] =
            [updatedTask[index+1],updatedTask[index]]
        }
        setTasks(updatedTask)
    }



    return (
        <div>
            {/* Container */}
            <div className="flex flex-col justify-center h-80 w-72 gap-5 items-center font-sans bg-[#90CAF9] rounded-lg shadow-lg border-0 lg:w-80 lg:justify-evenly  lg:h-96 xl:w-[30vw] xl:h-[50vh]">
                    {/* Heading */}
                    <h1 className="text-3xl lg:text-4xl  xl:text-6xl py-2 text-white font-bold">Todo App</h1>

                    {/* Search bar */}
                    <div className="flex">
      
                        <input 
                            className="outline-none p-0.5 rounded-l border lg:w-[200px] xl:min-w-[20vw]"
                            type="text"
                            placeholder="Add a task .."
                            value={newTasks}
                            onChange={handelInputChange}
                        />

                        <button 
                            className=" hover:bg-red-300 active:bg-red-500 text-white border-1 outline-none bg-red-400 rounded-r px-2"
                            onClick={addTask}>Add
                        </button>

                    </div>

                    {/* Tasks */}
                    <ol className="overflow-auto flex flex-col items-center gap-1 lg:w-[300px] xl:w-[400px] xl:gap-2">
                        {tasks.map((task, index) => 
                            <li className="flex px-2"
                            key={index}>
                            <span className="bg-white px-5 rounded-l py-0.5 xl:px-16 "
                            >{task}</span>
                            <button className="hover:bg-red-300 active:bg-red-500 rounded-r text-white bg-red-400 px-1"
                                onClick={() => deleteTask(index)}>Delete</button>
                            <button onClick={() => moveTaskUp(index)}>☝️</button>
                            <button onClick={() => moveTaskDown(index)}>👇</button>
                            </li>)}
                    </ol>

            </div>
            
        </div>
    )
}