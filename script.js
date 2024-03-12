const myLibrary = [];

class Book {
  constructor(author, title, pages, hasRead) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.hasRead = hasRead;
  }
  addBook() {
    const author = document.getElementById("author").value;
    const title = document.getElementById("title").value;
    const pages = document.getElementById("pages").value;

    const book = new Book(author, title, pages, hasRead);
    return book;
  }
}

let delteBtn;
let readBtn;
function arrayIteration(array) {
  const card = document.querySelector(`.card${i - 1}`);
  const authorText = document.createElement("p");
  const titleText = document.createElement("p");
  const pageText = document.createElement("p");
  readBtn = document.createElement("button");
  deleteBtn = document.createElement("button");
  deleteBtn.addEventListener("click", () => card.remove());

  deleteBtn.className = "delete-btn card-btn";
  readBtn.className = `card-btn read-btn`;
  deleteBtn.textContent = "Delete";
  if (array[i - 2].read == true) {
    readBtn.textContent = "Read";
    readBtn.style.backgroundColor = "#22c55e";
  } else {
    readBtn.textContent = " Not Read";
    readBtn.style.backgroundColor = "#f43f5e";
  }

  authorText.textContent = `Author: ${array[i - 2].author}`;
  titleText.textContent = `Title: ${array[i - 2].title}`;
  pageText.textContent = `Pages: ${array[i - 2].pages}`;
  card.append(authorText, titleText, pageText, readBtn, deleteBtn);
}

let i = 1;
function createCard() {
  const bookContainer = document.querySelector(".book-container");
  const bookCard = document.createElement("div");
  bookCard.className = `book-card card${i}`;
  bookContainer.appendChild(bookCard);
  i++;
}
function clearInput() {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.value = "";
  });
  const checkbox = document.getElementById("read");
  checkbox.checked = false;
}

const addBtn = document.querySelector(".add-book");
const modal = document.querySelector(".modal");
addBtn.addEventListener("click", () => {
  modal.showModal();
});
//form validation for submiting form
const form = document.querySelector("form");
console.log(form.checkValidity());
form.addEventListener("submit", () => {
  if (form.checkValidity()) {
    const book = new Book();
    modal.close();
    createCard();
    hasReadCheckbox();
    myLibrary.push(book.addBook());
    arrayIteration(myLibrary);
    readBtn.addEventListener("click", hasReadToggle);
    clearInput();
    //set validity messages back on input elements after submit
    setDefaultValidityMessage();
  }
});

//input variables
const author = document.getElementById("author");
const title = document.getElementById("title");
const pages = document.getElementById("pages");
const inputs = document.querySelectorAll(".required-input");

////set validity message for each input value so
//by default each element isn't valid until they are changed
//via their input event listeners
function setDefaultValidityMessage() {
  author.setCustomValidity("Author name must be 2 characters or more");
  title.setCustomValidity("Please enter your book title");
  pages.setCustomValidity(
    "Number of pages in your book must range from 1-22,000"
  );
}
setDefaultValidityMessage();

//dynamic input validations
author.addEventListener("input", () => {
  if (author.value.length >= 2) {
    author.setCustomValidity("");
  } else {
    author.setCustomValidity("Author name must be 2 characters or more");
  }
  author.reportValidity();
  console.log(form.checkValidity());
});
title.addEventListener("input", () => {
  if (title.value == "") {
    title.setCustomValidity("Please enter your book title");
  } else {
    title.setCustomValidity("");
  }
  title.reportValidity();
});
pages.addEventListener("input", () => {
  if (pages.value >= 1 && pages.value <= 22000) {
    pages.setCustomValidity("");
  } else {
    pages.setCustomValidity(
      "Number of pages in your book must range from 1-22,000"
    );
  }
});

const closeBtn = document.getElementById("close");
closeBtn.addEventListener("click", () => {
  modal.close();
});

let hasRead = false;
function hasReadCheckbox() {
  const readChecked = document.getElementById("read").checked;
  if (readChecked == true) {
    hasRead = true;
  } else if (readChecked == false) {
    hasRead = false;
  }
}

function hasReadToggle(e) {
  let btnPressed = e.target;
  let btnPressedText = e.target.innerText;
  if (btnPressedText == "Not Read") {
    btnPressed.style.backgroundColor = "#22c55e";
    btnPressed.textContent = "Read";
    hasRead = true;
  } else if (btnPressedText == "Read") {
    btnPressed.style.backgroundColor = "#f43f5e";
    btnPressed.textContent = "Not Read";
    hasRead = false;
  }
}

//close popup if clicked outside of it
window.addEventListener("click", (e) =>
  e.target.matches("dialog") ? modal.close() : 0
);
