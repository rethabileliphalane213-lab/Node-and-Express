require('dotenv').config({ path: './secret.env' });
let bodyParser=require("body-parser")
let express = require('express');
let app = express();
console.log("Hello World")

/*app.get("/", (req, res) => {
  res.send("Hello World");
}); */

/*app.get("/",(req,res)=>{
    res.send("Hello Express")
})*/


app.use((req,res,next)=>{
  
  console.log(req.method + " " + req.path + " - " + req.ip);
  next()
})

app.use("/public",express.static(__dirname + "/public"))


app.get("/",(req,res)=>{
  const absolutePath=__dirname + "/views/index.html" 
  res.sendFile(absolutePath)
   
})


app.get("/json",(req,res)=>{
  const style=process.env.MESSAGE_STYLE
  if(style ==="uppercase"){
    res.json({"message": "Hello json".toUpperCase()})
  }else{
    res.json({"message": "Hello json"})
  }
  
})
app.get('/now',(req,res,next)=>{
  const time=new Date().toString()
  req.time=time
  next()
},(req,res)=>{
  res.json({time: req.time})
})


app.get("/:word/echo",(req,res)=>{
  res.json({echo: req.params.word})
})

app.get("/name",(req,res)=>{
  const names=req.query.first
  const last=req.query.last
  res.json({name: `${names} ${last}`})
})



app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json());

app.post("/data",(req,res)=>{
res.json(req.body)
})

app.post("/name",(req,res)=>{
    const first=req.body.first
  const last=req.body.last
  res.json({name: `${first} ${last}`})
})



















 module.exports = app;
