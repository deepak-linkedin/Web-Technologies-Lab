const express = require("express");
const {MongoClient} = require("mongodb");

const app = express();

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

let db;

client.connect().then(() => {
    db = client.db("book_store");
    console.log("MongoDB connected");
});

app.use(express.json())
app.use(express.static("public"));

// SEARCH BOOK BY TITLE
app.get("/books/search", async(req,res) => {
    const title = req.query.title;

    const books = await db.collection("books").find(
        {title:{$regex:title,$options:"i"}}
    ).toArray();

    res.json(books);
});

// FILTER BY CATEGORY
app.get("/books/category/:category", async(req,res) => {
    const category = req.params.category;

    const books = await db.collection("books").find({category:category}).toArray();

    res.json(books);
});

// SORT BOOKS
app.get("/books/sort/:field", async(req,res) => {
    const field = req.params.field;

    let sortOption = {};

    if(field === "price"){
        sortOption = {price:1};
    }
    if(field === "rating"){
        sortOption = {rating:-1};
    }

    const books = await db.collection("books").find().sort(sortOption).toArray();

    res.json(books);

});

// TOP RATED BOOKS
app.get("/books/top", async(req,res) => {
    const books = await db.collection("books").find({rating:{$gte:4}}).limit(5).toArray();

    res.json(books);
});

// PAGINATION
app.get("/books", async(req,res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 5;

    const books = await db.collection("books").find().skip((page-1)*limit).limit(limit).toArray();

    res.json(books);
});

app.listen(3000, ()=> {
    console.log("Server running on port 3000");
});