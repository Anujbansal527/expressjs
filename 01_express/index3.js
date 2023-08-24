//website routing express js 
const express =  require("express");
const app = express();
const port=3000;

//send html element as a response single line 
app.get("/",(req,res)=>{
    res.send("<h1>Hello from the express</h1>");
});

//multiple lines
app.get("/about",(req,res)=>{
    res.write("<h1>Hello from the express, about page</h1>");
    res.write("<h1>data occupied by about page</h1>");
    //end writting response
    res.send();
});

app.get("/contact",(req,res)=>{
    res.send("Hello from the express, contact page");
});

app.get("/temp",(req,res)=>{
    //"Object data to Jason data"
    res.send({
        id:1,
        name:"Anuj"
    });
});
app.get("/temp1",(req,res)=>{
    //"Array of Object in the form of Jason data"
    res.send([{
        id:1,
        name:"Anuj"
    },{
        id:1,
        name:"Anuj"
    }
    ]);
});
app.get("/temp2",(req,res)=>{
    res.json([{
        id:1,
        name:"anuj"
    }]);
});

app.listen(port,()=>{
    console.log(`Listening port ${port}`);
});