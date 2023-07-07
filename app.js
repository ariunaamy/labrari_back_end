const express = require("express");
const cors = require("cors");
const booksController = require("./controllers/booksController.js")

const app = express();
// const firebaseAdmin = require('firebase-admin');
// const { Pool } = require('pg');

// // Initialize Firebase Admin SDK
// firebaseAdmin.initializeApp({
//   credential: firebaseAdmin.credential.cert(serviceAccount),
//   // Replace `serviceAccount` with your Firebase service account credentials
// });

// // Initialize PostgreSQL connection pool
// const pool = new Pool({
//   user: 'your_username',
//   host: 'your_host',
//   database: 'your_database',
//   password: 'your_password',
//   port: 5432, // Replace with your PostgreSQL port
// });

app.use(cors());
app.use(express.json());

app.get("/", (req,res) =>{
    res.send("Welcome to Labrari!")
})

app.use("/books", booksController);
app.get("*", (req,res) => {
    res.status(404).send("Page Not Found")
})

module.exports = app;