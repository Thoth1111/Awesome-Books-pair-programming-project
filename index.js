// let title = document.querySelector(".title_input");
// let author = document.querySelector(".author_input");
// let addBtn = document.querySelector(".add_btn");
// let empty = document.querySelector(".empty_bookstore");
// let form = document.querySelector(".book_form");
// let tableBody = document.querySelector(".table_body");
// let booksArr = [];
// let storedBooks = JSON.parse(localStorage.getItem("bookstored"));

// -----------------------My code----------------------------------

let title = document.querySelector(".title_input");
let author = document.querySelector(".author_input");
let addBtn = document.querySelector(".add_btn");
let empty = document.querySelector(".empty_bookstore");
let form = document.querySelector(".book_form");
let tableBody = document.querySelector(".table_body");
let booksArr = [];

function loadBooks(){
    if (!storedBooks) {
        empty.innerHTML = "No books in the library";
    }
    else {
        empty.style.display = "none";
        let storedBooks = JSON.parse(localStorage.getItem("bookstored"));
        let eachTableRow = "";
    for (let i = 0; i < storedBooks.length; i += 1) {
        eachTableRow +=    
         `<tr>
         <td>${storedBooks[i].titleKey}</td>
         <td>${storedBooks[i].authorKey}</td>
         <td><button id="${i}" class="remove_btn">Remove</button></td>
         </tr>`
    }
    tableBody.innerHTML = eachTableRow; 
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let booksData = {
      titleKey: title.value,
      authorKey: author.value,
    }
    booksArr.push(booksData)
    localStorage.setItem('bookstored', JSON.stringify(booksArr));
})  

window.addEventListener("load", loadBooks);  



// let deleteBookBtn = document.querySelectorAll('remove_btn');
// deleteBookBtn.forEach((n) => n.addEventListener('click', () => {
//     console.log('clicked');
//     let index = deleteBookBtn.getAttribute('id');
//     if (index === 0) {
//         let index = 1;
//     }
//     booksArr = booksArr.splice(index-1, 1);
//     localStorage.clear();
//     localStorage.setItem('bookstored', JSON.stringify(booksArr));
//     loadBooks;
// }))


// -----------------------My code----------------------------------

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     let booksData = {
//         titleKey: title.value,
//         authorKey: author.value,
//     }
//     booksArr.push(booksData)
//     localStorage.setItem('bookstored', JSON.stringify(booksArr))
// })    
    
// window.addEventListener("load", () => {
//     if (!storedBooks) {
//         empty.innerHTML = "No books in the library";
//     }
//     else {
//         empty.style.display = "none";
//         let eachTableRow = "";
//         for (let i = 0; i < storedBooks.length; i += 1) {
//           eachTableRow +=
//           `<tr>
//             <td>${storedBooks[i].titleKey}</td>
//             <td>${storedBooks[i].authorKey}</td>
//             <td><button id="${i}" class="remove_btn">Remove</button></td>
//            </tr>`
//         }
//         tableBody.innerHTML = eachTableRow; 
//     } 
// })


// document.querySelectorAll('remove_btn').forEach((n) => n.addEventListener('click', () => {
//     console.log('clicked')
//     booksArr = booksArr.splice(`${i}`,1);
//     localStorage.setItem('bookstored', JSON.stringify(booksArr))
// }))
// let bookToRemove = null;
// (e) => {
//     let index = deleteBookBtn.getAttribute('id')

//     console.log(` ${index} to be removed`);
//     if (!index) {
//         return;
//     }
//     else {
//         bookToRemove = storedBooks[index];
//         bookArr = storedBooks.filter(aBook, () =>
//             aBook.tittle != bookToRemove.tittle
//         ); 
//             localStorage.setItem('Books', JSON.stringify(bookArr));
//         }
//     }); 