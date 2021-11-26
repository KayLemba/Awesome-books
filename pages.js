const bookList = document.querySelector('#displayed-books');
const bookAdd = document.querySelector('.books-adding');
const contactMe = document.querySelector('#contact-me');
const link = document.querySelectorAll('.link');
const link2 = document.querySelector('.addNew');
const link1 = document.querySelector('.bookListing');
const link3 = document.querySelector('.contactInfo');

link.forEach((item) => {
  item.addEventListener('click', (e) => {
    if (e.target.classList.contains('bookListing')) {
      bookAdd.style.display = 'none';
      contactMe.style.display = 'none';
      bookList.style.display = 'block';
      e.target.classList.add('active');
      link2.classList.remove('active');
      link3.classList.remove('active');
    }
    if (e.target.classList.contains('addNew')) {
      contactMe.style.display = 'none';
      bookList.style.display = 'none';
      bookAdd.style.display = 'flex';
      e.target.classList.add('active');
      link1.classList.remove('active');
      link3.classList.remove('active');
    }
    if (e.target.classList.contains('contactInfo')) {
      bookAdd.style.display = 'none';
      bookList.style.display = 'none';
      contactMe.style.display = 'flex';
      e.target.classList.add('active');
      link2.classList.remove('active');
      link1.classList.remove('active');
    }
  });
});

window.addEventListener('load', () => {
  link1.classList.add('active');
});
