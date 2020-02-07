// const numbers = [1, 2, 3, 4, 5];
// const rta = numbers.filter(item => item % 2 !== 0);
// console.log(numbers, rta);


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
    completed: false,
  },
  {
    title: 'Make new endpoint for login',
    duration: 240,
    completed: true,
  },
];

const rta = tasks
.map(task => {
  return {
    ...task,
    durationInHours: task.duration / 60
  };
})
.filter(task => task.durationInHours > 2 && task.completed)

console.log(rta);