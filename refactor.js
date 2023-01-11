const title = document.querySelector('.title_input');
const author = document.querySelector('.author_input');
const empty = document.querySelector('.empty_bookstore');
const form = document.querySelector('.book_form');
const tableBody = document.querySelector('.table_body');
let storedBooks = JSON.parse(localStorage.getItem('bookstored'));

function displayBooks(booksData) {
  let eachTableRow = '';
  for (let i = 0; i < booksData.length; i += 1) {
    eachTableRow
      += `<tr>
            <td>${booksData[i].titleKey}</td>
            <td>${booksData[i].authorKey}</td>
            <td><button type="button" id=${i} class="remove_btn">Remove</button></td>
        </tr>
        `;
  }
  tableBody.innerHTML = eachTableRow;
  const deleteBookBtn = document.querySelectorAll('.remove_btn');
  deleteBookBtn.forEach((elementBtn) => {
    elementBtn.addEventListener('click', () => {
      const index = elementBtn.getAttribute('id');
      storedBooks.splice(index, 1);
      localStorage.setItem('bookstored', JSON.stringify(storedBooks));
      displayBooks(storedBooks);
    });
  });
}

window.addEventListener('load', () => {
  if (!storedBooks) {
    empty.innerHTML = 'No books in the library';
  } else {
    empty.style.display = 'none';
    displayBooks(storedBooks);
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const booksData = {
    titleKey: title.value,
    authorKey: author.value,
  };
  if (!storedBooks) {
    storedBooks = [];
  }
  storedBooks.push(booksData);
  localStorage.setItem('bookstored', JSON.stringify(storedBooks));
  displayBooks(storedBooks);
});