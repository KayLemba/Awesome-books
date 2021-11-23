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