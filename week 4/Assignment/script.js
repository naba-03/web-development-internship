let students = JSON.parse(localStorage.getItem("students")) || [];

const studentForm = document.getElementById("studentForm");
const studentTableBody = document.getElementById("studentTableBody");

studentForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("studentName").value;
    const age = document.getElementById("studentAge").value;
    const course = document.getElementById("studentCourse").value;
    const email = document.getElementById("studentEmail").value;

    const student = {
        id: Date.now(),
        name: name,
        age: age,
        course: course,
        email: email
    };

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    studentForm.reset();

    displayStudents();
});

function displayStudents() {

    studentTableBody.innerHTML = "";

    students.forEach(function (student) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.course}</td>
            <td>${student.email}</td>
            <td>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </td>
        `;

        studentTableBody.appendChild(row);
    });
}

displayStudents();