const express = require("express");
const port = 8000;
const app = express();

app.use (express.json());

app.get("/", (req,res) =>{
    res.json({hello: "world"});
})

app.get('/api/cities', (req,res)=>{
    console.log(res);
    res.json({
        cities:[
            {
                id:1,
                name:"Mexico",
                population: 100,
            },
            {
                id:1,
                name:"DurDur",
                population: 140,
            },
            {
                id:1,
                name:"Canada",
                population: 400,
            }
        ]
    })
})
app.post("/api/cities", (req,res) =>{
    res.json({
        status: "success",
        city: req.body,
    })
})

app.delete("/api/cities/:id", (req,res) =>{
    console.log(req.params);
    res.json({
        status: "success",
        msg: `Deleted city id: ${req.params.id}`
    })
});

app.listen(port, () => {
    console.log(`List to port of ${port}`)
})
