const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./confing/dbconnection");

const app = express();
const port = 5001;

// Connect Database
connectDB();

// Middleware
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
    res.send("Server Working");
});

// Contact Routes
app.use("/api/contacts", require("./routes/contactroute"));

app.use("/api/users", require("./routes/userroute"));

// Start Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});