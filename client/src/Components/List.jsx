import React from 'react';
import Entry from './Entry.jsx'

const List = (props) => {
  return (
    <div>
      <input onChange={props.onInputChange}></input>
      <br/>
      <button onClick={props.addTask}>Add Task</button>
      <h3>Your Tasks
      </h3>
      <ul>

        {props.tasks.map((task, key) => (
          <Entry index={key} key={key} doneTask={props.doneTask} task={task}/>
        ))}

      </ul>
    </div>
  );
}

export default List