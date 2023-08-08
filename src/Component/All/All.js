import React,{useEffect,useState} from 'react'
import Task from '../task/Task'
import Addtask from '../addTask/Addtask'
import "../../Global.css"

const All = () => {

  
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  // const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setInputValue('');
    }
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

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
      <Addtask 
      inputValue={inputValue}
      handleInputChange={handleInputChange}
      handleAddTask={handleAddTask}
      />
      
        {tasks.map((task) => (
          <Task 
           id= {task.id}
           text = {task.text}
           completed={task.completed}
           handleDeleteTask={()=> handleDeleteTask(task.id)}
           handleCompleteTask={()=> handleCompleteTask(task.id)}
           deleted={true}
          />
        ))}
      
    </div>
  )
}

export default All