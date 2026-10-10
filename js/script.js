document.addEventListener('DOMContentLoaded', () => {
  
  // Login Form Logic
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const errorMsg = document.getElementById('errorMsg');

      // Simple mock validation
      if (email && password) {
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
      } else {
        errorMsg.style.display = 'block';
      }
    });
  }

  // Dashboard Logout Logic
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'index.html';
    });
  }

  // Dashboard Tasks Logic
  const taskList = document.getElementById('taskList');
  const taskCountText = document.getElementById('taskCountText');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const addTaskForm = document.getElementById('addTaskForm');
  const newTaskInput = document.getElementById('newTaskInput');
  const saveTaskBtn = document.getElementById('saveTaskBtn');

  function updateTaskCount() {
    if (!taskList || !taskCountText) return;
    const total = taskList.querySelectorAll('.task-item').length;
    const completed = taskList.querySelectorAll('.task-item.completed').length;
    taskCountText.textContent = `${completed}/${total} tasks completed`;
  }

  if (taskList) {
    // Handle checking/unchecking existing tasks
    taskList.addEventListener('click', (e) => {
      const checkbox = e.target.closest('.task-checkbox');
      if (checkbox) {
        const item = checkbox.closest('.task-item');
        item.classList.toggle('completed');
        updateTaskCount();
      }
    });
  }

  if (addTaskBtn && addTaskForm) {
    addTaskBtn.addEventListener('click', () => {
      addTaskForm.classList.toggle('hidden');
      if (!addTaskForm.classList.contains('hidden')) {
        newTaskInput.focus();
      }
    });
  }

  if (saveTaskBtn && newTaskInput && taskList) {
    saveTaskBtn.addEventListener('click', () => {
      const val = newTaskInput.value.trim();
      if (val) {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `
          <div class="task-checkbox"><i class="fa-solid fa-check"></i></div>
          <span>${val}</span>
        `;
        taskList.appendChild(li);
        newTaskInput.value = '';
        addTaskForm.classList.add('hidden');
        updateTaskCount();
      }
    });

    // Allow enter key
    newTaskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        saveTaskBtn.click();
      }
    });
  }

  // Learning Goals Logic
  const goalList = document.getElementById('goalList');
  const goalCountText = document.getElementById('goalCount');

  function updateGoalCount() {
    if (!goalList || !goalCountText) return;
    const total = goalList.querySelectorAll('.goal-item').length;
    const completed = goalList.querySelectorAll('.goal-item.done').length;
    goalCountText.textContent = `${completed}/${total}`;
  }

  if (goalList) {
    goalList.addEventListener('click', (e) => {
      const checkbox = e.target.closest('.goal-checkbox');
      if (checkbox) {
        const item = checkbox.closest('.goal-item');
        item.classList.toggle('done');
        updateGoalCount();
      }
    });
    // Init state
    updateGoalCount();
  }
});
