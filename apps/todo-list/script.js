/*

@Pankaj : Create the loadTasks function.

1. Name the function `loadTasks`.
2. It should read tasks from `localStorage`.
3. Clear all existing elements from `#taskList`.
4. Loop through each task in the saved list.
5. For each task:

   * Create a `<div>` with class `task-card`.
   * Insert the task name.
   * Add an inline `onclick="removeTask(index)"` to remove that specific task.
6. Ensure this function is called every time the page loads.

*/
$(document).ready(loadTasks);


function loadTasks() {
   const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
   $('#taskList').empty();
   tasks.forEach((task, index) => {
      $('#taskList').append(`
         <div class = "task-card">
            ${task}<button onclick = "removeTask(${index})">delete</button>
         </div>
      `);
   });

}

/*
@Czar
Create the addTask function.

1. Name the function `addTask`.
2. It should read the input value from `#taskInput`.
3. If the input is not empty:
   * Read the current tasks from `localStorage`.
   * Add the new task to the list.
   * Save the updated list back to `localStorage`.
   * Clear the input box.
   * Call the `loadTasks` function to refresh the task list.

*/

function addTask() {
   inputTask = document.getElementById("taskInput");
   inputTaskValue = inputTask.value; 
   if (inputTask !== ""){
      let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.append(inputTask);
      localStorage.setItem("tasks" , JSON.stringify(tasks));
      inputTaskValue = "";
      loadTasks();
   };
}












/*
@Nabin:
Create a `removeTask(index)` function to delete tasks from `localStorage` and refresh the list.
1. Fetch the current task list from localStorage key "tasks".
2. If nothing is stored, treat it as an empty array ([]).
3. Use tasks.splice(index, 1) to delete the task at the specified position.
4. Save the updated tasks array back to localStorage using JSON.stringify.
5. Call loadTasks() to rebuild the task list in the page so the removal is immediately visible.

*/