const express = require("express");
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
var app = express();

app.get('/',(req,res)=>{
    res.send({
        name:'Andrew',
        likes: ["Bikings","Swimming"]
        
    });
});
app.get('/bad',(req,res)=>{
    
});
app.listen(port);
