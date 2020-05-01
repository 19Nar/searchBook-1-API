const form = document.querySelector("form");
const myInput = document.querySelector("input");
const searchBook = document.querySelector("button");
const searchResults = document.querySelector("#results");

const book_URL= `https://www.googleapis.com/books/v1/volumes?q=${myInput}&callback=handleResponse`
//const book_URL= `https://www.googleapis.com/books/v1/volumes?q=harry+potter&callback=handleResponse`


form.addEventListener("submit", formDone);

function formDone(e){
    e.preventDefault();
    bookInputValue = myInput.value;
    getResults(bookInputValue);
};


const getResults = () => {
    const url = book_URL
    //console.log(url);

    // turning to JSON
    fetch(url)
    .then(response => { return response.text()})
    .then(book=>{ return book.slice(89,)})
    .then(result=>{ return result.substr(0,result.length - 4)})
    .then(book => {

    searchResults.innerHTML = 

     `
     <hr>
       <div class="container">
<div class="row">
  <div class="col-sm-4 bg-secondary p-2 text-white text-center">
    <span id="text-center">Title: ${book.title} </span>
  </div>
  <div class="col-sm-2 bg-dark p-2 text-center text-white">
    <span id="text-center">Author: ${book.authors}</span>
  </div>
  <div class="col-sm-4 bg-secondary p-2 text-center text-white">
    <span id="text-center">Publisher: ${book.publisher}</span>
  </div>
  <div class="col-sm-2 bg-dark p-2 text-center text-white">
    <span id="text-center">Published Date: ${book.publishedDate}</span>
  </div>
</div>
</div>
       `
    })
};