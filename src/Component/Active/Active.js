import React, { useEffect, useState } from 'react'
import "../../Global.css"
import Task from '../task/Task'

const Active = () => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleCompleteTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);

  };

  return (
  

    <div className='container'>
      {tasks.map((task) => (
        task.completed ?
        ""
        :
          <Task 
           id= {task.id}
           text = {task.text}
           completed={task.completed}
          //  handleDeleteTask={()=> handleDeleteTask(task.id)}
           handleCompleteTask={()=> handleCompleteTask(task.id)}
           deleted={false}
          />
        ))}
    </div>
  )
}

export default Active