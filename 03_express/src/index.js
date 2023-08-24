//website routing express js 
const express =  require("express");
const app = express();
const port=3000;
const path = require("path");

const staticPath=path.join(__dirname,"../public");
//built in middleweare
app.use(express.static(staticPath));

app.get("/",(req,res)=>{
    res.send("Hello from the express");
});

app.get("/about",(req,res)=>{
    res.send("Hello from the express, about page");
});

app.get("/contact",(req,res)=>{
    res.send("Hello from the express, contact page");
});

app.get("/temp",(req,res)=>{
    res.send("Hello from the express, temp page");
});

app.listen(port,()=>{
    console.log(`Listening port ${port}`);
});