import express from "express"
import connectToDataBase from "./DB/dbConnection.js";
import app from "./app.js";
// import authRoutes from "./routes/auth.routes.js"

import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;

// app.use(express.json())

// app.use("/api/auth", authRoutes)

app.listen(port, () => {
    connectToDataBase();
    console.log("App is listening on port number", port)
})