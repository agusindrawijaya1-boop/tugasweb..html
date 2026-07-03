// server.js

const http = require("http");

const PORT = 3000;

const server = http.createServer((res, req) => {
  const url = req.url;

  // Routing
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Selamat Datang di Praktikum Pemrograman Dasar</h1>");
  } 
  else if (url === "/profil") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      nama: "Agus Indra",
      nim: "2025806066",
      jurusan: "Teknik Informatika"
    }));
  } 
  else if (url === "/mata-kuliah") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify([
      "Pemrograman Dasar",
      "Struktur Data",
      "Basis Data",
      "Jaringan Komputer"
    ]));
  } 
  else if (url === "/kontak") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      email: "agusindrawijaya1@gmail.com",
      whatsapp: "085545140532"
    }));
  } 
  else {
    // Halaman tidak ditemukan
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 - Halaman Tidak Ditemukan</h1>");
  }
});

server.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
}); 