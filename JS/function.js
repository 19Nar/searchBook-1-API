const form = document.querySelector("form");
const myInput = document.querySelector("input");
const searchBook = document.querySelector("button");
const searchResults = document.querySelector("#results");
let data;

const book_URL= `https://www.googleapis.com/books/v1/volumes?q=${data}&callback=handleResponse`
//const book_URL= `https://www.googleapis.com/books/v1/volumes?q=harry+potter&callback=handleResponse`


form.addEventListener("submit", formDone);

function formDone(e){
    e.preventDefault();
    bookInputValue = myInput.value;
    getResults(bookInputValue);
};


const getResults = (searchData) => {
  data = searchData
    const url = book_URL
    //console.log(url);

    // turning to JSON
    fetch(url)
    .then(response => { return response.text()})
    .then(book=>{ return book.slice(89,)})
    .then(result=>{ return result.substr(0,result.length - 4)})
    .then(last => {
      let jsonData = JSON.parse(last)
      jsonData.forEach((book) => {
        console.log(book.volumeInfo.title)

    searchResults.innerHTML = 

     `
       <div class="container">
<div class="row">
  <div class="col-sm-4 p-2 text-white text-center">
    <span id="text-center">Title: ${book.volumeInfo.title} </span>
  </div>
  <div class="col-sm-2 p-2 text-center text-white">
    <span id="text-center">Author: ${book.volumeInfo.authors}</span>
  </div>
  <div class="col-sm-4 p-2 text-center text-white">
    <span id="text-center">Publisher: ${book.volumeInfo.publisher}</span>
  </div>
  <div class="col-sm-2 p-2 text-center text-white">
    <span id="text-center">Published Date: ${book.volumeInfo.publishedDate}</span>
  </div>
</div>
</div>
       `
    })
  })
};
