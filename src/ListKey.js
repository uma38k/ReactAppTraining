import React from 'react'

function ListKey() {
  const tasks1 = [
    { id: 1, name: "Write an article" },
    { id: 2, name: "Review code" },
    { id: 3, name: "Fix bugs" }
  ];
   
  return (
    <>
      <h3>List of tasks:</h3>
      <ul>
        {tasks1.map(task => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </>
  );
}

export default ListKey;
