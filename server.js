const express = require("express");

var app = express();

app.get('/',(req,res)=>{
    res.send({
        name:'Andrew',
        likes: ["Bikings","Swimming"]
        
    });
});
app.get('/bad',(req,res)=>{
    
});
app.listen(3000);