function addNote() {
    fetch("/notes", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            title: document.getElementById("title").value,
            subject: document.getElementById("subject").value,
            description: document.getElementById("description").value
        })
    })

    .then(res => res.json())
    .then(data => {
        alert("Note Added");
        loadNotes();
    });
}


function loadNotes() {
    fetch("/notes")
    .then(res => res.json())
    .then(data => {
        let output = "";

        data.forEach(note => {
            output += `
                <div>
                    <h3>${note.title}</h3>
                    <p>${note.subject}</p>
                    <p>${note.description}</p>

                    <button onclick="deleteNode(${note._id})">Delete</button>
                </div>
                <hr>
            `;
        });
        document.getElementById("notes").innerHTML = output;
    });
}

function deleteNode(id) {
    fetch("/notes/"+id, {
        method: "DELETE"
    })
    .then(() => {
        alert("Note Deleted");
        loadNotes();
    });
}