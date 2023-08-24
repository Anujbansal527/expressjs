//website routing express js 
const express =  require("express");
const app = express();
const port=3000;
const path = require("path");
const hbs=require("hbs");

//console.log(path.join(__dirname,"../templates/partials"));
//to create path

const staticPath=path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialPath=path.join(__dirname,"../templates/partials");

//to set view engine
app.set('view engine',"hbs");

//settinf coustomize view
app.set("views",templatePath);

//register partials 
hbs.registerPartials(partialPath);


//built in middleweare

//app.use(express.static(staticPath)); //this is use to call file from index.html

//template engine route
app.get("/",(req,res) =>{
    res.render("index",{
        name:"Anuj",
    }); //here we write hbs  file name
});

app.get("/about",(req,res) =>{
    res.render("about",{
        name:"Anuj",
    }); //here we write hbs  file name
});

app.get("*",(req,res) =>{
    res.render("404",{
        err:"OOPS page not found",
    }); //here we write hbs  file name
});

app.get("/about/*",(req,res) =>{
    res.render("404",{
        err:"OOPS about page not found",
    }); //here we write hbs  file name
});

app.listen(port,()=>{
    console.log(`Listening port ${port}`);
});