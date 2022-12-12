let bookTitle = document.querySelector('input[id=title]')
let bookAuthor = document.querySelector('input[id=author]')
let bookNumberOfPages = document.querySelector('input[type=tel]')
let bookRead = document.querySelector('input[type=checkbox]')
let libraryWrapper = document.querySelector('.library-wrapper')
let defaultCard = document.querySelector('#default')
libraryWrapper.removeChild(defaultCard)
document.querySelector('form > button').addEventListener('click', addBookToLibrary)



function validateForm(event) {
    event.preventDefault()
}

let myLibrary = []

function Book(title, author, pages, read) {
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
    libId = myLibrary.push(bookInstance) - 1

    addBookCard(libId)
}

function addBookCard(id) {
    newCard = defaultCard.cloneNode(true)
    newCard.id = id

    newCard.querySelector('.book-title').textContent = myLibrary[id].title
    newCard.querySelector('.book-author').textContent = myLibrary[id].author
    newCard.querySelector('.book-pages').textContent = myLibrary[id].pages
    if (myLibrary[id].read) {
        newCard.className = 'book-card read'
    }
    
    newCard.querySelector('.remove-button').cardId = id
    newCard.querySelector('.read-button').cardId = id
    newCard.querySelector('.read-button').addEventListener('click', toggleRead)
    newCard.querySelector('.remove-button').addEventListener('click', removeCard)
        
    libraryWrapper.appendChild(newCard)
    updateEntries(1, id)
}

function toggleRead(e){    
    if (document.getElementById(e.target.cardId).className == 'book-card') {
        document.getElementById(e.target.cardId).className = 'book-card read'
        myLibrary[e.target.cardId].read = true
        document.querySelector('.details-read').textContent = Number(document.querySelector('.details-read').textContent) + 1
        document.querySelector('.details-not-read').textContent = Number(document.querySelector('.details-not-read').textContent) - 1
    } else {
        document.getElementById(e.target.cardId).className = 'book-card'
        myLibrary[e.target.cardId].read = false
        document.querySelector('.details-read').textContent = Number(document.querySelector('.details-read').textContent) - 1
        document.querySelector('.details-not-read').textContent = Number(document.querySelector('.details-not-read').textContent) + 1
    }
}

function removeCard(e) {
    document.getElementById(e.target.cardId).remove()
    updateEntries(0, e.target.cardId)
}

function manualAdd(title, author, pages, read) {
    const bookInstance = new Book(title, author, pages, read)
    libId = myLibrary.push(bookInstance) - 1

    addBookCard(libId)
}

function updateEntries(plusOrMinus, id) {
    if (plusOrMinus) {
        document.querySelector('.details-total').textContent = Number(document.querySelector('.details-total').textContent) + 1
        if (myLibrary[id].read) {
            document.querySelector('.details-read').textContent = Number(document.querySelector('.details-read').textContent) + 1
        } else {
            document.querySelector('.details-not-read').textContent = Number(document.querySelector('.details-not-read').textContent) + 1
        }
    } else {
        document.querySelector('.details-total').textContent = Number(document.querySelector('.details-total').textContent) - 1
        if (myLibrary[id].read) {
            document.querySelector('.details-read').textContent = Number(document.querySelector('.details-read').textContent) - 1
        } else {
            document.querySelector('.details-not-read').textContent = Number(document.querySelector('.details-not-read').textContent) - 1
        }       
    }
}



manualAdd('Solaris', 'Stanislaw Lem', 204, false)
manualAdd('Roadside Picnic', 'Arkady & Boris Strugatsky', 224, false)
manualAdd('Neuromancer', 'William Gibson', 271, false)
