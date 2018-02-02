import React from 'react';


const Entry = (props) => {

  return (
    <div>
      <li>{props.task}<button onClick={() => props.doneTask(props.index)}>Done!</button></li>
      
    </div>
  );
}

export default Entry