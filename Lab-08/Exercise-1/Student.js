function getDetails() {

    let studentName = document.getElementById("name").value;
    let m1 = document.getElementById("mark1").value;
    let m2 = document.getElementById("mark2").value;
    let m3 = document.getElementById("mark3").value;

    m1 = Number(m1);
    m2 = Number(m2);
    m3 = Number(m3);


    const totalMarks = (m1,m2,m3)=> m1+m2+m3;

    const calculateAverage = (m1,m2,m3) => (m1+m2+m3)/3;

    let total = totalMarks(m1,m2,m3);

    let avg = calculateAverage(m1,m2,m3);
    
    document.getElementById("output").innerHTML = `
        <p>Student Name : ${studentName}</p>
        <p>Total Marks : ${total}</p>
        <p>Average Marks  : ${avg.toFixed(2)}</p>
    `;
};