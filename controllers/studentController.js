import StudentModel from "../models/studentModel.js";

const studentModel = require('../models/studentModel');

// GET
exports.getStudents = async (req, res) => {
  const [rows] = await studentModel.getAllStudents();
  res.json(rows);
};

// CREATE
exports.createStudent = async (req, res) => {
  const { nama, nim, prodi, alamat } = req.body;
  await studentModel.createStudent({ nama, nim, prodi, alamat });
  res.json({ message: "Data berhasil ditambahkan" });
};

// UPDATE
exports.updateStudent = async (req, res) => {
  const { id } = req.params;
  const { nama, nim, prodi, alamat } = req.body;
  await studentModel.updateStudent(id, { nama, nim, prodi, alamat });
  res.json({ message: "Data berhasil diupdate" });
};

// DELETE
exports.deleteStudent = async (req, res) => {
  const { id } = req.params;
  await studentModel.deleteStudent(id);
  res.json({ message: "Data berhasil dihapus" });
};