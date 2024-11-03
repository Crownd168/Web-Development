// Array to store book objects
const library = [];

// Book Constructor
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  // Method to get summary of the book
  getSummary() {
    return `${this.title} by ${this.author}, published in ${this.year}`;
  }
}

// Function to add a book to the library
function addBook(title, author, year) {
  const book = new Book(title, author, year);
  library.push(book);
  console.log(`Book added: ${book.getSummary()}`);
}

// Function to view all books in the library
function viewBooks() {
  console.log("Books in the library:");
  library.forEach((book, index) => {
    console.log(`${index + 1}. ${book.getSummary()}`);
  });
}

// Function to delete a book from the library by title
function deleteBook(title) {
  const index = library.findIndex((book) => book.title === title);
  if (index !== -1) {
    console.log(`Book deleted: ${library[index].getSummary()}`);
    library.splice(index, 1);
  } else {
    console.log("Book not found.");
  }
}
