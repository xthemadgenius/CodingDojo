const express = require("express");
const port = 8000;
const app = express();

app.get("/", (req,res) =>{
    res.json("howdy");
})

app.get('/api/cities', (req,res)=>{
    console.log(res);
})

app.lister(port, () => {
    console.log(`List to port of ${port}`)
})
