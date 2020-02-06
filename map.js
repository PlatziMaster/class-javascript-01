// const numbers = [1, 2, 3, 4, 5];
// const rta = numbers.map(function (item) {
//   return item * 2;
// });

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
    completed: false,
  },
];

const rta = tasks.map(task => {
  return {
    ...task,
    durationInHours: task.duration / 60,
  };
});
console.log(tasks);
console.log('------------');
console.log(rta);