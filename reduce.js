// const numbers = [1, 2, 3, 5];
// const rta = numbers.reduce((count, value) => {
//   return count + value;
// }, 0);
// console.log(numbers, rta);

const tasks = [
  {
    id: 1343,
    title: 'Fix issue 423',
    duration: 60,
    completed: true,
  },
  {
    id: 2454,
    title: 'Make new chart for dashboard',
    duration: 120,
    completed: false,
  },
  {
    id: 32323,
    title: 'Show validations in form',
    duration: 180,
    completed: true,
  },
  {
    id: 45434,
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
.filter(task => task.completed)
.reduce((count, task) => {
  // console.log(count, task);
  return count + task.durationInHours;
}, 0);

// const obj = tasks.find(item => item.id === 32323);
const position = tasks.indexOf(item => item.id === 32323);
// obj.title = 'jskhfjksah';
console.log(position);

const objs = {
  1343: {
    title: 'Fix issue 423',
    duration: 60,
    completed: true,
  },
  2454: {
    title: 'Make new chart for dashboard',
    duration: 120,
    completed: false,
  },
  32323: {
    title: 'Show validations in form',
    duration: 180,
    completed: true,
  },
  45434: {
    title: 'Make new endpoint for login',
    duration: 240,
    completed: true,
  },
}

const rt3 = Object.keys(objs).map(key => objs[key]);
console.log(rt3);