document
  .getElementById("bookForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get input values
    const title = document.getElementById("bookTitle").value;
    const author = document.getElementById("bookAuthor").value;
    const genre = document.getElementById("bookGenre").value;

    // Create book item
    const bookItem = document.createElement("li");
    bookItem.innerHTML = `
    <div>
      <strong>Title:</strong> ${title} <br>
      <strong>Author:</strong> ${author} <br>
      <strong>Genre:</strong> ${genre}
    </div>
    <span class="swap-request">Request Swap</span>
  `;

    // Add book to list
    document.getElementById("bookList").appendChild(bookItem);

    // Clear form inputs
    document.getElementById("bookTitle").value = "";
    document.getElementById("bookAuthor").value = "";
    document.getElementById("bookGenre").value = "";

    // Add swap request event listener
    bookItem
      .querySelector(".swap-request")
      .addEventListener("click", function () {
        alert(`You have requested to swap "${title}" by ${author}`);
      });
  });
