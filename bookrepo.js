// Function to get books from LocalStorage
function getBooks() {
  let books = localStorage.getItem("books");
  if (books) {
    return JSON.parse(books);
  } else {
    return [];
  }
}

// Function to save books to LocalStorage
function saveBooks(books) {
  localStorage.setItem("books", JSON.stringify(books));
}

// Function to display the book list
function displayBooks() {
  const bookContainer = document.getElementById("books");
  const books = getBooks();
  bookContainer.innerHTML = "";

  books.forEach((book, index) => {
    const bookElement = document.createElement("div");
    bookElement.classList.add("book");
    bookElement.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p>${book.summary}</p>

            <div class="progress-container">
                <input type="number" id="progress${index}" value="${book.progress}" min="0" max="100" onchange="updateProgress(${index}, this.value)">
                <div class="progress-bar">
                    <div class="progress-bar-fill" style="width: ${book.progress}%"></div>
                </div>
                <span>${book.progress}%</span>
            </div>

            <button onclick="removeBook(${index})">Remove</button>
        `;
    bookContainer.appendChild(bookElement);
  });
}

// Function to remove a book
function removeBook(index) {
  const books = getBooks();
  books.splice(index, 1);
  saveBooks(books);
  displayBooks();
}

// Function to update progress
function updateProgress(index, progress) {
  const books = getBooks();
  books[index].progress = parseInt(progress);
  saveBooks(books);
  displayBooks(); // Update the progress bar visually
}

// Add book to the list
document.getElementById("bookForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const summary = document.getElementById("summary").value;

  const newBook = { title, author, summary, progress: 0 }; // Initialize progress to 0
  const books = getBooks();
  books.push(newBook);
  saveBooks(books);
  displayBooks();

  // Clear the form fields
  document.getElementById("bookForm").reset();
});

// Initialize book list
document.addEventListener("DOMContentLoaded", displayBooks);
