const myLibrary = [];

function Book(author, title, pages, read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}
function addBook(){
    const author = document.getElementById("author").value;
    const title = document.getElementById("title").value;
    const pages = document.getElementById("pages").value;

    const book = new Book(author, title, pages, hasRead);
    return book;
}
function arrayIteration (array){
    const card = document.querySelector(`.card${i - 1}`);
    const authorText = document.createElement("p");
    const titleText = document.createElement("p");
    const pageText = document.createElement("p");

    authorText.textContent = `Author: ${array[i - 2].author}`;
    titleText.textContent = `Title: ${array[i - 2].title}`;
    pageText.textContent = `Pages: ${array[i - 2].pages}`;
    card.append(authorText, titleText, pageText);
}

let i = 1;
function createCard (){
    const bookContainer = document.querySelector(".book-container");
    const bookCard = document.createElement("div");
    bookCard.className = `book-card card${i}`;
    bookContainer.appendChild(bookCard);
    i++;
}

const addBtn = document.querySelector(".add-book");
const modal = document.querySelector(".modal");
addBtn.addEventListener("click", () => {
    modal.showModal();
})
const sumbitBtn = document.getElementById("submit-button");
sumbitBtn.addEventListener("click", () => {
    modal.close();
    createCard();
    myLibrary.push(addBook());
    arrayIteration(myLibrary);
    console.log(myLibrary);
})

const closeBtn = document.getElementById("close");
closeBtn.addEventListener("click", () => {
    modal.close();
})

const readBtn = document.getElementById("read");
let hasRead = false;
function hasReadToggle(){
    if(readBtn.className == "not-read"){
        readBtn.className = "read";
        readBtn.textContent = "Read"
        hasRead = true;
    }
    else if (readBtn.className == "read"){
        readBtn.className = "not-read";
        readBtn.textContent = "Not Read";
        hasRead = false;
    }
}
readBtn.addEventListener("click",hasReadToggle);
