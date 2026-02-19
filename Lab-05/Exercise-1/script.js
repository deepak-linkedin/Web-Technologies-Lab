let xmlDoc = null;

function loadEmployees() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET","employees.xml",true);

    xhr.onload = function() {
        if(xhr.status === 200){
            xmlDoc = xhr.responseXML;

            if(!xmlDoc){
                showMessage("Malformed XML!","error");
                return;
            }
            displayEmployees();
        }else{
            showMessage("Error loading XML file!","error");
        }
    };
    xhr.onerror = function() {
        showMessage("Network Error!","error");
    };
    xhr.send();
}

function displayEmployees() {
    const employees = xmlDoc.getElementsByTagName("employee");

    if(employees.length===0){
        document.getElementById("tableContainer").innerHTML = "<p>No employees found</p>";
        return;
    }
    let table = `
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Actions</th>
            </tr>
    `;
    for(let i=0;i<employees.length;i++){
        const id = employees[i].getElementsByTagName("id")[0].textContent;
        const name = employees[i].getElementsByTagName("name")[0].textContent;
        const dept = employees[i].getElementsByTagName("department")[0].textContent;
        const salary = employees[i].getElementsByTagName("salary")[0].textContent;

        table += `
            <tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${dept}</td>
                <td>${salary}</td>
                <td>
                    <button onclick="editEmployee(${i})">Edit</button>
                    <button onclick="deleteEmployee(${i})">Delete</button>
                </td>
            </tr>
        `;
    }
    table += "</table>";
    document.getElementById("tableContainer").innerHTML = table;
    // console.log(employees);

}

function addEmployee() {
    const id = document.getElementById("empId").value;
    const name = document.getElementById("empName").value;
    const dept = document.getElementById("empDept").value;
    const salary = document.getElementById("empSalary").value;

    if(!id || !name || !dept || !salary){
        showMessage("All fields are mandatory!","error");
        return;
    }
    const newEmployee = xmlDoc.createElement("employee");
    const idNode = xmlDoc.createElement("id");
    idNode.appendChild(xmlDoc.createTextNode(id));

    const nameNode = xmlDoc.createElement("name");
    nameNode.appendChild(xmlDoc.createTextNode(name));

    const deptNode = xmlDoc.createElement("department");
    deptNode.appendChild(xmlDoc.createTextNode(dept));

    const salNode = xmlDoc.createElement("salary");
    salNode.appendChild(xmlDoc.createTextNode(salary));

    newEmployee.appendChild(idNode);
    newEmployee.appendChild(nameNode);
    newEmployee.appendChild(deptNode);
    newEmployee.appendChild(salNode);

    xmlDoc.getElementsByTagName("employees")[0].appendChild(newEmployee);

    displayEmployees();
    showMessage("Employee added successfully!","success");
}

function editEmployee(index) {
    const employees = xmlDoc.getElementsByTagName("employee");
    const emp = employees[index];

    const newDept = prompt("Enter new Department:",emp.getElementsByTagName("department")[0].textContent);
    const newSalary = prompt("Enter Salary:",emp.getElementsByTagName("salary")[0].textContent);

    if(newDept){
        emp.getElementsByTagName("department")[0].textContent = newDept;
    }
    if(newSalary){
        emp.getElementsByTagName("salary")[0].textContent = newSalary;
    }

    displayEmployees();
    showMessage("Employee updated successfully!","success");
}

function deleteEmployee(index){
    const employees = xmlDoc.getElementsByTagName("employee");
    const emp = employees[index];

    emp.parentNode.removeChild(emp);

    displayEmployees();
    showMessage("Employee deleted successfully!","success");
}

function showMessage(msg,type){
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = msg;
    messageDiv.className = "message "+type;
}
window.onload = loadEmployees;