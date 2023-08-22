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
    const readBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    deleteBtn.className = "delete-btn card-btn";
    readBtn.className = `read-btn card-btn`;
    deleteBtn.textContent = "Delete";
    if(array[i - 2].read == true){
        readBtn.textContent = "Read";
        readBtn.style.backgroundColor = "#22c55e";
    } 
    else{
        readBtn.textContent = " Not Read";
        readBtn.style.backgroundColor = "#f43f5e";
    }

    authorText.textContent = `Author: ${array[i - 2].author}`;
    titleText.textContent = `Title: ${array[i - 2].title}`;
    pageText.textContent = `Pages: ${array[i - 2].pages}`;
    card.append(authorText, titleText, pageText, readBtn, deleteBtn);
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
    hasReadCheckbox();
    myLibrary.push(addBook());
    arrayIteration(myLibrary);
    console.log(myLibrary);
})

const closeBtn = document.getElementById("close");
closeBtn.addEventListener("click", () => {
    modal.close();
})

let hasRead = false;
function hasReadCheckbox(){
    const readChecked = document.getElementById("read").checked;
    if(readChecked == true){
        hasRead = true;
    }
    else if (readChecked == false){
        hasRead = false;
    }
}

function hasReadToggle(){
    if(hasRead == false){
        // readBtn.className = "read";
        readBtn.textContent = "Read"
        hasRead = true;
    }
    else if (hasRead == true){
        // readBtn.className = "not-read";
        readBtn.textContent = "Not Read";
        hasRead = false;
    } 
}
// readBtn.addEventListener("click", hasReadToggle);


