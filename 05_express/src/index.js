//website routing express js 
const express =  require("express");
const app = express();
const port=3000;
const path = require("path");


const staticPath=path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../template");

//to set view engine
app.set('view engine',"hbs");
//settinf coustomize view
app.set("views",templatePath);
//built in middleweare

//app.use(express.static(staticPath)); //this is use to call file from index.html

//template engine route
app.get("/",(req,res) =>{
    res.render("index",{
        name:"Anuj",
    }); //here we write hbs  file name
})

app.get("/",(req,res)=>{
    res.send("Hello from the express");
});

app.listen(port,()=>{
    console.log(`Listening port ${port}`);
});