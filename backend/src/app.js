import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import userRoutes from "./routes/userRoute.js"
const app = express()
dotenv.config();

app.use(express.json());
app.use(cors());
app.use("/expression", userRoutes)
app.get("/", (req , res) =>{
    res.send("gettted one")
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
    console.log(`server is run on port ${PORT}`)
})