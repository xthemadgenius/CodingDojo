const cityController = require("../controllers/city.controller");

module.exports = (app) => {
  // in Django: path("api/cities", views.all_cities)
  app.post("/api/cities", cityController.create);
  app.get("/api/cities", cityController.getAll);
  app.get("/api/cities/:id", cityController.getOne);
  // if we used this route it would never be triggered because the :id above would think "recommended" was the id, solution: move this above :id route
  // app.get("/api/cities/recommended", cityController.recommended);
  app.put("/api/cities/:id", cityController.update);
  app.delete("/api/cities/:id", cityController.delete);
};
