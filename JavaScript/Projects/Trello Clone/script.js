const columns = document.querySelectorAll(".column");

// Ticket create karne ka function
const createTicket = (value) => {
  const ticket = document.createElement("p");
  const elementText = document.createTextNode(value);

  ticket.setAttribute("draggable", "true");
  ticket.appendChild(elementText);

  return ticket;
};

// localStorage se savedTasks ko fetch karna
let savedTasks = JSON.parse(localStorage.getItem("savedTasks"));

if (!savedTasks) {
  savedTasks = {};
}

// Pehle se saved tasks ko display karna
Object.keys(savedTasks).forEach(column => {
  savedTasks[column].forEach(task => {
    const ticket = createTicket(task);
    const columnElement = Array.from(columns).find(col => col.children[0].innerText.toLowerCase() === column.toLowerCase());
    if (columnElement) {
      const form = columnElement.querySelector('form');
      columnElement.insertBefore(ticket, form.nextSibling || form); // Form ke baad insert karna
    }
  });
});

// Naya task add karne ka function
const addTask = (event) => {
  event.preventDefault();

  const currentForm = event.target;
  const value = currentForm.elements[0].value;
  const parent = currentForm.parentElement;
  const ticket = createTicket(value);

  parent.insertBefore(ticket, currentForm.nextSibling || currentForm); // Form ke baad insert karna

  const h3Value = parent.children[0].innerText;

  if (!Array.isArray(savedTasks[h3Value])) {
    savedTasks[h3Value] = [];
  }

  savedTasks[h3Value].push(value);

  localStorage.setItem("savedTasks", JSON.stringify(savedTasks));

  currentForm.reset();
};

// Har form ko event listener add karna
for (let i = 0; i < columns.length; i++) {
  const form = columns[i].lastElementChild;

  form.addEventListener("submit", addTask);
}

// localStorage data structure
// {
//   "work todo": ["task 1", "task 2"],
//   "progress": ["task 3"],
// };
