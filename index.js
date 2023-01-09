let title = document.querySelector(".title_input")
let author = document.querySelector(".author_input")
let addBtn = document.querySelector(".add_btn")
let empty = document.querySelector(".empty_bookstore")
let form = document.querySelector(".book_form")
// console.log(title, author, addBtn, form);
let tableBody = document.querySelector(".table_body")
let booksArr = []
let storedBooks = JSON.parse(localStorage.getItem("bookstored"))
// console.log(storedBooks);
// console.log(tableBody);  

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let booksData = {
        titleKey: title.value,
        authorKey: author.value,
    }
    // console.log(booksData);
    booksArr.push(booksData)
        // console.log(booksArr);
        (localStorage.setItem('bookstored', JSON.stringify(booksArr)))
})

// tableBody=""

window.addEventListener("load", () => {
    if (!storedBooks) {
        empty.innerHTML = "No books in the library"
    }
    else {
        empty.style.display = "none"
        let eachTableRow = ""
        for (let i = 0; i < storedBooks.length; i += 1) {
            // console.log(storedBooks[i]);
            // console.log(storedBooks[i].titleKey);
            // console.log(storedBooks[i].authorKey);

            eachTableRow +=
                `<tr>
                        <td>${storedBooks[i].titleKey}</td>
                        <td>${storedBooks[i].authorKey}</td>
                        <td><button id=${i} class="remove_btn">Remove</button></td>
                </tr>`
        }

        tableBody.innerHTML = eachTableRow
    }

})

let deleteBookBtn = document.querySelector(".remove_btn")
let bookToRemove = null;
deleteBookBtn.addEventListener('click', (e) => {
    let index = deleteBookBtn.getAttribute('id')

    console.log(` ${index} to be removed`);
    if (!index) {
        return;
    }
    else {
        bookToRemove = storedBooks[index];
        bookArr = storedBooks.filter(aBook, () =>
            aBook.tittle != bookToRemove.tittle
        ); 
            localStorage.setItem('Books', JSON.stringify(bookArr));
        }
    }); 