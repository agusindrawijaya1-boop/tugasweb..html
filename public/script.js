let editId = null;

async function loadData(){

   const response = await fetch("/api/mahasiswa");

   const data = await response.json();

   let html="";

   data.forEach(item=>{

       html+=`

       <tr>

           <td>${item.nama}</td>

           <td>${item.nim}</td>

           <td>${item.prodi}</td>

           <td>

               <button onclick="edit(${item.id})">Edit</button>

               <button onclick="hapus(${item.id})">Delete</button>

           </td>

       </tr>

       `;

   });

   document.getElementById("tabelMahasiswa").innerHTML=html;

}
