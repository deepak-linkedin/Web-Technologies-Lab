function showDetails() {
    let sid = document.getElementById("id").value;
    let sname = document.getElementById("name").value;
    let sdept = document.getElementById("department").value;
    let smarks = document.getElementById("marks").value;

    sid = Number(sid);
    smarks = Number(smarks);

    const student = {
        id: sid,
        name: sname,
        department: sdept,
        marks: smarks
    };

    //destructuring
    const {id,name,department,marks} = student;
    //const {id: sid, name: sname, department: sdept, marks: smarks} = student;

    //Grade function 
    const getGrade = (marks) => {
        if(marks>=90) return "S";
        else if(marks>=80)return "A";
        else if(marks>=70) return "B";
        else return "F";
    };

    const updatedStudent = {
        ...student,
        grade: getGrade(marks)
    };

    //display 
    document.getElementById("output").innerHTML = `
    <h2>Student Details</h2>
    <p>id: ${id}</p>
    <p>Name: ${name}</p>
    <p>Department: ${department}</p>
    <p>Marks: ${marks}</p><br><br>

    <h2>Updated Object Student Details</h2>
    <p>id: ${updatedStudent.sid}</p>
    <p>Name: ${updatedStudent.sname}</p>
    <p>Department: ${updatedStudent.sdepartment}</p>
    <p>Marks: ${updatedStudent.smarks}</p>
    <p>Grade: ${updatedStudent.grade}</p>
    `;
}