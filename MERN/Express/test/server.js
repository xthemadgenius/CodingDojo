const express = require("express");
const port = 8000;
const app = express();

const theCities = [
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
app.use (express.json());

app.get("/", (req,res) =>{
    res.json({hello: "world"});
})

app.get('/api/cities', (req,res)=>{
    console.log(res);
    res.json({
        cities: theCities,
    })
})

app.get("/api/cities/:id", (req,res) =>{
    res.json({
        city:{
            id: red.params.id
        }
    })
})

app.put("/api/cities/:id", (req,res) =>{
    console.log(req.body);
    res.json({
        status:"success",
        msg: `Updated City id: ${req.params.id}`
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
