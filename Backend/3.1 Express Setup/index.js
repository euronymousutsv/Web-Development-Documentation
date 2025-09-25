import express from 'express';
import {dirname} from "path";
import { fileURLToPath } from 'url';
const app= express();
const port = 3000;
const __dirname= dirname(fileURLToPath(import.meta.url)) //getting root directory
app.get("/",(req,res)=>{
//console.log(req.rawHeaders); displays request header
    res.send("<h1>Hello World</h1>")
})
app.get("/Contact",(req,res)=>{
    res.send("<h1>Contact</h1><p>Phone: +01245615648</p>")
})
app.get("/about",(req,res)=>{
    res.send("<h1>About</h1>")
})
app.get("/form-submit",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html") //send file
})
app.post("/register",(req,res)=>{
res.sendStatus(201);

})
app.put("/user/utsav",(req,res)=>{
    res.sendStatus(200)
})
app.patch("/user/utsav",(req,res)=>{
    res.sendStatus(200)
})
app.delete("/user/utsav", (req,res)=>{
    res.sendStatus(200);

})
app.listen(port,()=>{
    console.log(`Express running on ${port}`);
})


