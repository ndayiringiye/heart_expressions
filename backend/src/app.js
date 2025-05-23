import express from "express";

const app = express()

app.use(express.json());
app.get("/", (req , res) =>{
    res.send("gettted one")
})

app.listen(5000, () =>{
    console.log(`server is run on port 5000`)
})