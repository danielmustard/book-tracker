//HTML Elements
const formButton = document.getElementById('new-book-button');
const formContainer = document.getElementById('form-container')
const formSubmitButton = document.getElementById('form-submit-button')

//input box elements
const bookTitleInput = document.getElementById('book-title');
const bookAuthorInput = document.getElementById('book-author')
const bookPagesInput = document.getElementById('book-pages')
const bookStatus = document.getElementById('book-read')

//Array to store books added to library 
let myLibrary = []


//button event listeners ----------------

//This makes form visible to DOM
formButton.addEventListener('click', () =>{
    formContainer.style.display = "flex"
    formContainer.style.width = "100vw"
    formContainer.style.justifyContent = 'center'

})

formSubmitButton.addEventListener('click', () => {

    const newBook = new Book(
        bookTitleInput.value,
        bookAuthorInput.value,
        bookPagesInput.value,
        bookStatus.value,
    )
    myLibrary.push(newBook)
    
    console.table(myLibrary)
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
    
}

