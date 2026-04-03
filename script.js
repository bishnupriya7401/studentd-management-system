let students = [];

function addStudent() {
    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;
    let age = document.getElementById("age").value;

    if (name === "" || course === "" || age === "") {
        alert("Please fill all fields");
        return;
    }

    let student = {
        name: name,
        course: course,
        age: age
    };

    students.push(student);
    displayStudents();

    document.getElementById("name").value = "";
    document.getElementById("course").value = "";
    document.getElementById("age").value = "";
}


function displayStudents() {
    let list = document.getElementById("studentList");
    list.innerHTML = "";

    students.forEach((student, index) => {
        list.innerHTML += `
            <tr>
                <td>${student.name}</td>
                <td>${student.course}</td>
                <td>${student.age}</td>
                <td>
                    <button onclick="deleteStudent(${index})">Delete</button>
                    <button onclick="editStudent(${index})">Edit</button>
                </td>
            </tr>
        `;
    });
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}


function editStudent(index) {
    let student = students[index];

    document.getElementById("name").value = student.name;
    document.getElementById("course").value = student.course;
    document.getElementById("age").value = student.age;

    deleteStudent(index);
}