 require('dotenv').config("./secrete.env")
let express = require('express');
let app = express();
console.log("Hello World")

/*app.get("/", (req, res) => {
  res.send("Hello World");
}); */

/*app.get("/",(req,res)=>{
    res.send("Hello Express")
})*/

app.get("/",(req,res)=>{
  const absolutePath=__dirname + "/views/index.html" 
  res.sendFile(absolutePath)
   
})
app.use("/public",express.static(__dirname + "/public"))


app.get("/json",(req,res)=>{
  const style=process.env.MESSAGE_STYLE
  if(style ==="uppercase"){
    res.json({"message": "Hello json".toUpperCase()})
  }else{
    res.json({"message": "Hello json"})
  }
  
})
































 module.exports = app;
