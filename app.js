// book constructor 
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//ui constructor
function UI() {
}

// Add Book to list
UI.prototype.addBookToList = function(book) {
  const list = document.getElementById('book-list');
  // create <tr></tr>
  const tr = document.createElement('tr');
  //insert calls
  tr.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;

  list.appendChild(tr);
};

// Show Alert
UI.prototype.showAlert = function(message, className) {
  // Create div
  const div = document.createElement('div');
  // Add Class Name
  div.className = `alert ${className}`;
  // Add Text
  div.appendChild(document.createTextNode(message));
  // Get parent 
  const container = document.querySelector('.container');
  // get form
  const form = document.getElementById('book-form');
  // indert div -- insertBefore(arg1 = obj inserted, arg2 = obj it is inserted before)
  container.insertBefore(div, form);
  // Timeout after 3 sec
  setTimeout(function() {
    document.querySelector('.alert').remove();
  }, 3000);
}

  // clear fields 
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';

}
// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e) {
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // Validate 
  if (title === '' || author === '' || isbn === '') {
    // error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
     // add book to list
  ui.addBookToList(book);
    // success alert
    ui.showAlert('Book Added!', 'success');
    // clear fields
  ui.clearFields();
  }

  e.preventDefault();
});