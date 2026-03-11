const express = require("express")

const {MongoClient, ObjectId} = require("mongodb");

const bodyParser = require("body-parser");

const cors = require("cors");

const app = express()

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

let db;

client.connect().then(()=> {
    db = client.db("student_notes");
    console.log("MongoDB Connected");
});

// ADD NOTE (Crud)
app.post("/notes", async (req,res) => {
    const note = {
        title: req.body.title,
        subject: req.body.subject,
        description: req.body.description,
        created_date: new Date()
    };

    const result = await db.collection("notes").insertOne(note);

    res.send(result);
});

// VIEW NOTE (cRud)
app.get("/notes", async(req,res) => {
    const notes = await db.collection("notes").find().toArray();

    res.json(notes);
});

// UPDATE NOTE (crUd)
app.put("/notes/:id",async(req,res) => {
    const id = req.params.id;

    const result = await db.collection("notes").updateOne(
        {_id: new ObjectId(id)},
        {$set: {
            title: req.body.title,
            description: req.body.description
        }}
    );
    res.send(result);
});

// DELETE NOTE (cruD)
app.delete("/notes/:id", async(req,res) => {
    const id = req.params.id;

    const result = db.collection("notes").deleteOne(
        {_id: new ObjectId(id)}
    );

    res.send(result);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
