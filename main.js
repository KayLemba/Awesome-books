class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Book.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static re(title, author) {
    const books = Book.getBooks();
    books.forEach((book, index) => {
      if (book.title === title && book.author === author) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }

  static displayBooks() {
    const books = Book.getBooks();
    books.forEach((book) => Book.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');

    const texty = document.createElement('h4');

    texty.innerHTML = `
      <h4>${book.title}</h4>
      <h4>${book.author}</h4>
      <button type="button" class= "delete">Remove </button>
      <hr>
      `;

    list.appendChild(texty);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

document.addEventListener('DOMContentLoaded', Book.displayBooks);
document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const book = new Book(title, author);
  Book.addBookToList(book);
  Book.addBook(book);
  Book.clearFields();
});

document.querySelector('#book-list').addEventListener('click', (e) => {
  Book.deleteBook(e.target);

  Book.re(e.target.previousSibling.previousSibling.previousSibling.previousSibling.textContent,
    e.target.previousSibling.previousSibling.textContent);
});