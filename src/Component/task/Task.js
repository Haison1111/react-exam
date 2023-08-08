import React from 'react'
import "./Task.css"

const Task = ({ id,text,completed,handleCompleteTask,handleDeleteTask,deleted}) => {
//   const [finish, setFinish] = useState(false)

  return (
    <div key={id} className='task'>
        <div className='list-task'>
            <input
              type="checkbox"
              checked={completed}
              onChange={handleCompleteTask}
            />
            <div className= 'completed' >{text}</div>
            </div>
            {deleted ? <button onClick={handleDeleteTask}>Delete</button> : ""}
          </div>
  )
}

export default Task