const express = require("express");
const app = express();

app.listen(3000, ()=>{
    console.log("done");
});

app.get("/", (req, res)=>{
    res.send("arrivee sur la page");
});

