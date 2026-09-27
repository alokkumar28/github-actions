import express from "express"

const app = express();
const port = 5000;

app.get("/health" ,(req , res)=>{
    res.json({message:"Server is running!"});
})

app.listen(port ,()=>{
    console.log(`Server is running at port ${port}`);
})
