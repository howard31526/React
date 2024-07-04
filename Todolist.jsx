import React,{useState} from "react";

function Todolist(){

    const [tasks,setTasks] = useState(["Practice React","Watch Tutorial","Hand on Homework"])
    const [newtask,setNew] = useState("")

    function AddTask(){
        if(newtask.trim() !==""){ //這邊是為確保不會每次沒有內容的時候點ADD也會有新的添加在todolist，所以這邊把newtask的文字修剪掉空白後如果還有東西才會添加內容
           setTasks(t => [...t,newtask]);
            setNew(""); 
        }
    }
    function RemoveTask(index){
        const updateTasks = tasks.filter((_,i) => i!==index);
        setTasks(updateTasks);
    }
    function MoveTaskUp(index){

        if(index > 0){ //如果index=0的情況就代表是在最上層，所以不能再往上移動了
            const updateTasks = [...tasks];
            [updateTasks[index],updateTasks[index - 1]] = 
            [updateTasks[index - 1],updateTasks[index]];
            setTasks(updateTasks);
        }
        
    }
    function MoveTaskDown(index){
        if(index < tasks.length - 1){
            const updateTasks = [...tasks];
            [updateTasks[index + 1],updateTasks[index]] = 
            [updateTasks[index], updateTasks[index + 1]];
            setTasks(updateTasks)
        }
    }
    function handleinputChange(event){
        setNew(event.target.value);
    }

    return( <div className="to-do-list">
                <h2>My-To-Do-List</h2>
                <div>
                    <input 
                        type="text"
                        placeholder="Enter a task..."
                        value={newtask}
                        onChange={handleinputChange} />
                    <button
                        className="add-button"
                        onClick={AddTask}>
                        ADD
                    </button>
                </div>

                <ol>
                    {tasks.map((task,index) => 
                        <li key={index}>
                            <span className="text">{task}</span>
                            <div className="button-all">
                               <button
                                    className="delete-button"
                                    onClick={() => RemoveTask(index)}>
                                    Delete
                                </button>
                                <button
                                    className="move-up"
                                    onClick={() => MoveTaskUp(index)}>
                                    UP
                                </button>
                                <button
                                    className="move-down"
                                    onClick={() => MoveTaskDown(index)}>
                                    DOWN
                                </button> 
                            </div>
                            
                        </li>)}
                </ol>
            </div>)
}
export default Todolist