import express from "express";

const app = express();
const PORT = 3000;

// Home route
app.get("/", (req, res) => {
    res.status(200).send("Welcome to Alok Kumar's Server!");
});

// Health check route
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "Server is healthy"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});

//Triggering workflow from feature branch