// require express packing from node_modules, it is just a function that is being imported
const express = require("express");
const port = 8000;

const app = express();

let citiesData = [
  {
    id: 1,
    name: "Aogashima",
    population: 170,
  },
  {
    id: 2,
    name: "Longyearbyen",
    population: 2144,
  },
  {
    id: 3,
    name: "Kennedy Meadows",
    population: 28,
  },
];

// without this, req.body will be undefined
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.get("/api/cities", (req, res) => {
  // respond with a JSON object that contains an array of city objects
  res.json({
    cities: citiesData,
  });
});

app.get("/api/cities/:id", (req, res) => {
  res.json({
    city: {
      id: req.params.id,
    },
  });
});

app.post("/api/cities", (req, res) => {
  res.json({
    status: "success",
    city: req.body,
  });
});

// put is to update something that already exists
app.put("/api/cities/:id", (req, res) => {
  console.log(req.body);

  res.json({
    status: "success",
    msg: `Updated city id: ${req.params.id}`,
  });
});

// :id is a URL parameter, just like a function paramater, it is a placeholder for what value will be passed in
app.delete("/api/cities/:id", (req, res) => {
  console.log(req.params);

  citiesData = citiesData.filter((city) => {
    return city.id != req.params.id;
  });

  console.log(citiesData);

  res.json({
    status: "tried to delete",
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port} for requests to respond to.`);
});
