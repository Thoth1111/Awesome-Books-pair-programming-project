let title = document.querySelector(".title_input")
let author = document.querySelector(".author_input")
let addBtn = document.querySelector(".add_btn")
let booksArr = []
let storedBooks = JSON.parse(localStorage.getItem("bookstored"))
console.log(storedBooks);
console.log(title.value);
console.log(author);
console.log(addBtn);




let addbookFun = () => {
    addBtn.addEventListener('click', function (e) {
        e.preventDefault()
      let booksData = {
        titleKey:title.value,
        authorKey:author.value,
    }  
    console.log(booksData);
    booksArr.push(booksData)
    console.log(booksArr);
    (localStorage.setItem('bookstored',JSON.stringify(booksArr)))
    })
}

addbookFun()

if (storedBooks) {
    for (let i = 0; i < storedBooks.length; i+=1) {
        
    }
} 