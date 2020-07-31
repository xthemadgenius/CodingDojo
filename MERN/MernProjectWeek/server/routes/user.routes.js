const UserController = require("../controllers/user.controller");
const User = require("../models/user.model");
const BusinessController = require("../controllers/business.controller");
const Business = require("../models/business.model");

module.exports = (app) => {
  // User Routes
  app.post("/api/users", UserController.newUser);
  app.get("/api/users", UserController.getGroup);
  app.get("/api/users/:id", UserController.getUser);
  app.put("/api/users/:id", UserController.updateUser);
  app.delete("/api/users/:id", UserController.deleteUser);
  // Business Routes
  app.post("/api/business", BusinessController.newBusiness);
  app.get("/api/business", BusinessController.getGroup);
  app.get("/api/business/:id", BusinessController.getBusiness);
  app.put("/api/business/:id", BusinessController.updateBusiness);
  app.delete("/api/business/:id", BusinessController.deleteBusiness);
};
