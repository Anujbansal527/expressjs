const express =  require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("Hello from the express");
});

app.listen(8000,()=>{
    console.log("Listening to port 8000");
});