const numbers = [1, 2, 3, 4, 5];
const rta = numbers.map(item => item * 2);

console.log(numbers, rta);

// const tasks = [
//   {
//     title: 'Fix issue 423',
//     duration: 60,
//     completed: true,
//   },
//   {
//     title: 'Make new chart for dashboard',
//     duration: 120,
//     completed: false,
//   },
//   {
//     title: 'Show validations in form',
//     duration: 180,
//     completed: false,
//   },
//   {
//     title: 'Make new endpoint for login',
//     duration: 240,
//     completed: false,
//   },
// ];

// // const rta = tasks.map(task => task.title);
// // console.log(rta);

// const rta = tasks
// .map(task => {
//   task.duration = task.duration / 60;
//   task.durationInHours = Math.ceil(task.duration / 60);
//   return {
//     ...task,
//     durationInHours: Math.ceil(task.duration / 60)
//   };
// })
// tasks.filter(item => item.durationInHours > 2)
// console.log(tasks.length);
// console.log(rta);

// [1,2,3,5].reduce((count, value) => {
//   return count +  value;
// }, 0);

// // console.log(initState);