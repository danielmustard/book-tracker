//Array to store books added to library 
let myLibrary = []

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

