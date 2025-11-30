// Select DOM elements
const taskInput = document.getElementById('task-input'); // Input field for new tasks [web:12]
const addButton = document.getElementById('add-btn'); // Add task button [web:12]
const taskList = document.getElementById('task-list'); // UL container for tasks [web:15]

// Add task functionality
addButton.addEventListener('click', addTask); // Event delegation for button clicks [web:26]

taskInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') addTask(); // Allow Enter key to add tasks
});

function addTask() {
  const taskText = taskInput.value.trim(); // Remove whitespace from input [web:24]
  
  // Edge case: Don't add empty tasks
  if (!taskText) {
    alert('Please enter a task!');
    return;
  }
  
  // Create new list item structure
  const li = document.createElement('li'); // Create li element [web:28]
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div>
      <button class="complete-btn">Complete</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;
  
  // Add to list
  taskList.appendChild(li); // Append new li to ul [web:23]
  
  // Clear input
  taskInput.value = '';
}

// Event delegation for all task buttons (handles dynamically added elements)
taskList.addEventListener('click', function(e) {
  const li = e.target.closest('li'); // Find closest li ancestor [web:24]
  
  if (!li) return;
  
  if (e.target.classList.contains('delete-btn')) {
    // Delete task
    li.remove(); // remove() deletes the element from DOM [web:24]
  } else if (e.target.classList.contains('complete-btn')) {
    // Toggle complete status
    const taskText = li.querySelector('.task-text');
    li.classList.toggle('completed'); // Toggle CSS class for strikethrough [web:24]
    
    // Update button text
    const btn = e.target;
    btn.textContent = li.classList.contains('completed') ? 'Undo' : 'Complete';
  }
});
