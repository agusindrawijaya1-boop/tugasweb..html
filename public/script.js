const API = "/students";

const form = document.getElementById("studentForm");

const table = document.getElementById("studentTable");

async function loadStudents() {
function tambahData() {
  const nama = document.getElementById("nama").value;
  const nim = document.getElementById("nim").value;
  const prodi = document.getElementById("prodi").value;
  const alamat = document.getElementById("alamat").value;

  fetch("http://localhost:3000/students", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nama, nim, prodi, alamat })
  })
  .then(res => res.json())
  .then(() => loadData());
}
    const response = await fetch(API);

    const result = await response.json();

    table.innerHTML = "";

    result.data.forEach(student => {

        table.innerHTML += `

        <tr>

            <td>${student.id}</td>

            <td>${student.npm}</td>

            <td>${student.nama}</td>

            <td>${student.jurusan}</td>

            <td>${student.semester}</td>

            <td>${student.email}</td>

        </tr>

        `;

    });

}

loadStudents();

form.addEventListener("submit", async function(e){

    e.preventDefault();

    const student={

        npm:npm.value,

        nama:nama.value,

        jurusan:jurusan.value,

        semester:semester.value,

        email:email.value

    };

    await fetch(API,{

        method:"POST",

        headers:{

            "Content-Type":"application/json"

        },

        body:JSON.stringify(student)

    });

    form.reset();

    loadStudents();

});
