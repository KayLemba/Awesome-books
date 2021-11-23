class Book {
  constructor (title,author) {
      this.title = title;
      this.author = author;
  }
}

class Displays {
  static displayBooks() {
      const books = Storage.getBooks();
  books.forEach((book) => Displays.addBookToList(book));
  }

  static addBookToList(book) {
      const list = document.querySelector('#book-list');

      const texty = document.createElement('h4');

      texty.innerHTML = `
      <h4>${book.title}</h4>
      <h4>${book.author}</h4>
      <h4><button type="button" class= "delete">Remove </button></h4>
      <hr>
      `;

      list.appendChild(texty);
  }

  static deleteBook(el) {
      if (el.classList.contains ('delete')) {
          el.parentElement.parentElement.remove();
      }
  }

  static clearFields() {
      document.querySelector('#title').value = '';
      document.querySelector('#author').value = '';
  }
}

class Storage {
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
      const books = Storage.getBooks();
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(author) {
      const books = Storage.getBooks();
       books.forEach ((book,index) => {
          if (book.author === author) {
             
              books.splice(index, 1);
           }
       });
       localStorage.setItem('books', JSON.stringify(books));
  }
}

document.addEventListener('DOMContentLoaded', Displays.displayBooks);
document.querySelector('#book-form').addEventListener('submit', (e) => 
{
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const book = new Book(title,author);

  Displays.addBookToList(book);
  Storage.addBook(book);
  Displays.clearFields();
});

document.querySelector('#book-list').addEventListener('click', (e) =>
{
  Displays.deleteBook(e.target);

  Storage.removeBook(e.target.parentElement.previousSibling.previousSibling.textContent);
});