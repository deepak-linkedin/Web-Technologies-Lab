function topBooks() {
    fetch("http://localhost:3000/books/top")

    .then(res => res.json())
    .then(data => displayBooks(data));
}

function sortBooks(field) {
    fetch(`http://localhost:3000/books/sort/${field}`)
    .then(res => res.json())
    .then(data => displayBooks(data));
}

function filterCategory(cat){
    fetch(`http://localhost:3000/books/category/${cat}`)
    .then(res => res.json())
    .then(data => displayBooks(data));
}

function searchBooks() {
    let title = document.getElementById("searchTitle").value;

    fetch(`http://localhost:3000/books/search?title=${title}`)
    .then(res => res.json())
    .then(data=>displayBooks(data));
}

function displayBooks(data) {
    let output = "";

    data.forEach(book => {
        output += `
            <div>
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>Category: ${book.category}</p>
                <p>Price: ${book.price}</p>
                <p>Rating: ${book.rating}</p>
            </div>
            <hr>
        `;
    });
    document.getElementById("books").innerHTML = output;
}

let page = 1;
function loadBooks() {
    fetch(`http://localhost:3000/books?page=${page}`)
    .then(res => res.json())
    .then(data => {
        displayBooks(data);
        page++;
    });
}