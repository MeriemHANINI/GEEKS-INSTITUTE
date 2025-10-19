import TodoList from './todo.js';

const myTodoList = new TodoList();

// Add tasks
myTodoList.addTask("Learn Node.js modules");
myTodoList.addTask("Practice ES6 syntax");
myTodoList.addTask("Build a project");

// Mark one as complete
console.log(myTodoList.markComplete(2));

// List all tasks
console.log("All tasks:");
myTodoList.listTasks().forEach(task => console.log(task));