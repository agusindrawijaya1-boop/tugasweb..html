import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/db.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Student Management API Running 🚀"
    });
});

// Test Koneksi Database
app.get("/test-db", async (req, res) => {

    try {

        const connection = await db.getConnection();

        const [rows] = await connection.query("SELECT NOW() AS waktu");

        connection.release();

        res.json({
            success: true,
            database: "Connected",
            server_time: rows[0].waktu
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log("==================================");
    console.log(" Student Management System");
    console.log("==================================");
    console.log(`Server Running : http://localhost:${PORT}`);
    console.log("Database : MySQL");
    console.log("==================================");

});
