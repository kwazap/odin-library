let bookTitle = document.querySelector('input[id=title]')
let bookAuthor = document.querySelector('input[id=author]')
let bookNumberOfPages = document.querySelector('input[type=tel]')
let bookRead = document.querySelector('input[type=checkbox]')



function validateForm(event) {
    event.preventDefault()
}

let myLibrary = []

function Book() {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}



function addBookToLibrary() {
    title = bookTitle.value
    author = bookAuthor.value
    pages = bookNumberOfPages.value
    read = bookRead.checked
    const bookInstance = new Book(title, author, pages, read)
    myLibrary.push(bookInstance)
}