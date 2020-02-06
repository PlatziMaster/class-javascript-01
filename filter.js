const tasks = [
  {
    title: 'Fix issue 423',
    duration: 60,
    completed: true,
  },
  {
    title: 'Make new chart for dashboard',
    duration: 120,
    completed: false,
  },
  {
    title: 'Show validations in form',
    duration: 180,
    completed: true,
  },
  {
    title: 'Make new endpoint for login',
    duration: 240,
    completed: false,
  },
];

const rta = tasks
.map(task => {
  return {
    ...task,
    durationInHours: task.duration / 60,
  };
})
.filter(task => task.completed)
.reduce((count, task) => {
  return count + task.durationInHours;
}, 0)
console.log(rta);