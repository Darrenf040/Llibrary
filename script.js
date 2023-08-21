const myLibrary = [addBook()];

function Book(name, id, pages){
    this.name = name;
    this.id = id;
    this.pages = pages;
}

function addBook(){
    const nameInput = prompt("Book Name");
    const idInput = prompt("Book Id Number");
    const pageInput = prompt("How many pages in your book");
    const book = new Book(nameInput, idInput, pageInput);
    return book;
}
console.log(myLibrary);
