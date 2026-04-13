let express = require('express');
let app = express();
console.log("Hello World")

app.get("/expess", (req, res) => {
  res.send("Hello World");
});

app.get("/",(req,res)=>{
    res.send("Hello Express")
})



 































 module.exports = app;
