import React,{useEffect,useState} from 'react'
// import Addtask from '../addTask/Addtask'
import Task from '../task/Task'
import "../../Global.css"


const Completed = () => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks))
      ;
    }
  }, []);

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className='container'>
      {tasks.map((task) => (
         task.completed? 
          <Task 
           id= {task.id}
           text = {task.text}
           completed={task.completed}
           handleDeleteTask={()=> handleDeleteTask(task.id)}
          //  handleCompleteTask={()=> handleCompleteTask(task.id)}
           deleted={true}
          />
          : ""
        ))}
    </div>
  )
}

export default Completed