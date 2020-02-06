import React, { useState } from 'react';
import '../styles/components/App.styl';

const App = () => {
  const initState = [
    {
      title: 'Fix issue 423',
      duration: 120,
      completed: true,
    },
    {
      title: 'Make new chart for dashboard',
      duration: 344,
      completed: false,
    },
    {
      title: 'Make new chart for dashboard 2',
      duration: 344,
      completed: false,
    },
    {
      title: 'Make new chart for dashboard 245',
      duration: 344,
      completed: false,
    },
  ];
  const [tasks, setTasks] = useState(initState);

  function showCompletedTasks() {
    setTasks(initState.filter(task => task.completed));
  }

  function showInCompletedTasks() {
    setTasks(initState.filter(task => !task.completed));
  }

  function showAllTasks() {
    setTasks(initState);
  }

  const listTasks = tasks.map((task, index) => (
    <li key={index}>
      {task.title}
:
      <strong>{task.duration}</strong>
    </li>
  ));
  return (
    <>
      <button onClick={showCompletedTasks}>Show completed tasks</button>
      <button onClick={showInCompletedTasks}>Show in completed tasks</button>
      <button onClick={showAllTasks}>Show all tasks</button>
      <ul>{listTasks}</ul>
    </>
  );
};

export default App;
