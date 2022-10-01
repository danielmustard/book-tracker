//HTML Elements
const formButton = document.getElementById('new-book-button');
const formContainer = document.getElementById('form-container')
const formSubmitButton = document.getElementById('form-submit-button')

//input box elements
const bookTitleInput = document.getElementById('book-title');
const bookAuthorInput = document.getElementById('book-author')
const bookPagesInput = document.getElementById('book-pages')
const bookStatus = document.getElementById('book-read')




bookStatus.addEventListener('click', () =>{
    console.log(this.value)
})



//Array to store books added to library 
let myLibrary = []


//button event listeners ----------------

//This makes form visible to DOM
formButton.addEventListener('click', () =>{
    formContainer.style.display = "flex"
    formContainer.style.width = "100vw"
    formContainer.style.justifyContent = 'center'

})
formSubmitButton.addEventListener('click', (e) => {
    //preventing form button from refeshing page (default)
    e.preventDefault()
    const newBook = new Book(
        bookTitleInput.value,
        bookAuthorInput.value,
        bookPagesInput.value,
        bookStatus.checked,
    )

    myLibrary.push(newBook)
    //hiding form again on submit'
    formContainer.style.display = "none"
    addBookToLibrary();
})

//The constructor that makes our books
function Book(title,author,pages,read){
    //this states that the values being used for the current construction should be what has just been passed in.
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    //a function that can be ran on each value created using the 'Book' object
    this.info = function(){
        return(`${title}, ${author}, ${pages}, ${read}`)
    }
}

const addBookToLibrary = () => {
    console.table(myLibrary)
    //
    const booksGrid = document.getElementById('books-grid')
    //This gets the most recent library book added to array
    let recentBook = myLibrary.pop()
    //need to make dom elements to hold our book information 
    //making list item to append to
    let listItem = document.createElement('li')
    listItem.classList = 'book'

    //appending list item to UL 
    booksGrid.appendChild(listItem)

    let bookTitle = document.createElement('div')
    let bookAuthor = document.createElement('div')
    let bookPages = document.createElement('div')
    let bookRead = document.createElement('div')
    let deleteButton = document.createElement('button')
    deleteButton.classList = 'delete-button'
    deleteButton.innerHTML = 'Delete'

    deleteButton.addEventListener('click', () =>{
        let parent = deleteButton.parentNode
        parent.remove()
    })

    listItem.appendChild(bookTitle)
    listItem.appendChild(bookAuthor)
    listItem.appendChild(bookPages)
    listItem.appendChild(bookRead)
    listItem.appendChild(deleteButton)
    //appending divs to parent li 

    const hasread = (recentBook.read) == true ? "Read" : "Not Read"

    //appending the inner html 
    bookTitle.innerHTML = `Title: ${recentBook.title}`
    bookAuthor.innerHTML = `Author: ${recentBook.author}`
    bookPages.innerHTML = `Number of Pages: ${recentBook.pages}`
    bookRead.innerHTML = `Read Status: ${hasread}`
 
        }

