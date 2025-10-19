class TodoList {
    constructor() {
      this.tasks = [];
    }
  
    addTask(task) {
      this.tasks.push({
        id: this.tasks.length + 1,
        description: task,
        completed: false,
        createdAt: new Date()
      });
    }
  
    markComplete(taskId) {
      const task = this.tasks.find(t => t.id === taskId);
      if (task) {
        task.completed = true;
        return `Task "${task.description}" marked as complete`;
      }
      return "Task not found";
    }
  
    listTasks() {
      return this.tasks.map(task => 
        `${task.id}. ${task.description} [${task.completed ? '✓' : ' '}]`
      );
    }
  }
  
  export default TodoList;