const noteList = document.querySelector("#note-list"),
  form = document.querySelector("#form"),
  note = document.querySelector("#note");




function EventListerners() {
  // Submit new Note
  form.addEventListener("submit", newNote);
}

EventListerners();


// Add new note to the list
function newNote(e) {
  // disable refresh page after submit form
  e.preventDefault();

  // get note Value
  let noteValue = note.value;

  
}

function noteTemplate1(value) {
  // Create <li> element
  const li = document.createElement("li");

  // create span for note Value
  const span = document.createElement("span");

  // append value to span
  span.innerHTML = value;

  // adding span to li element
  li.appendChild(span);

  // Create x (remove) button
  const removeBtn = document.createElement("a");
  removeBtn.textContent = "X";
  removeBtn.classList = "removeBtn";
  removeBtn.setAttribute("href", "#");

  // adding removeBtn to li
  li.appendChild(removeBtn);

  return li;
}


// Method 2:
// function noteTemplate(value) {
//   return `
//     <li>
//         <span>${value}</span>
//         <a href="#" class="removeBtn">X</a>
//     </li>
//     `;
// }
