const { add } = require("lodash");
const { produce } = require("immer");
const employees = {
  name: "John",
  age: 30,
  designation: "Software Engineer",
  salary: 1000,
  address: {
    city: "New York",
    country: "USA",
  },
  skills: ["JavaScript", "React", "Node", "MongoDB", "Express"],
  projects: [
    {
      name: "Project 1",
      duration: "6 months",
      teamSize: 5,
    },
    {
      name: "Project 2",
      duration: "12 months",
      teamSize: 10,
    },
  ],
  friends: [
    {
      name: "Friend 1",
      age: 25,
    },
    {
      name: "Friend 2",
      age: 28,
    },
  ],
  isMarried: false,
  isEmployed: true,
  isPromoted: false,
  isTransfered: false,
  isTerminated: false,
  isDead: false,
  isAlive: true,
  isHealthy: true,
  isSick: false,
  isStudying: false,
  isPlaying: true,
  isWatching: false,
  isReading: true,
  isCooking: false,
  isSinging: true,
  isDancing: false,
  isCoding: true,
};

Object.assign({}, employees, {});
Object.assign({}, employees, { age: 35 });
Object.assign({}, employees, { age: 35, salary: 1200 });
Object.assign({}, employees, { age: 35, salary: 1200, isMarried: true });
Object.assign({}, employees, {
  age: 35,
  salary: 1200,
  isMarried: true,
  isPromoted: true,
});
Object.assign({}, employees, {
  age: 35,
  salary: 1200,
  isMarried: true,
  isPromoted: true,
  isTransfered: true,
});

// const newEmployees = {
//   ...employees,
//   name: "John Doe",
//   age: 35,
//   salary: 1200,
//   isMarried: true,
//   isPromoted: true,
//   isTransfered: true,
//   address: {
//     ...employees.address,
//     city: "New York",
//   },
// };

produce(employees, (draftState) => {
  draftState.name = "John Doe";
  draftState.age = 35;
  draftState.salary = 1200;
});

console.log(employees);
console.log(newEmployees);
