const announcementController = require("../controllers/announcement.controller");

module.exports = (app) => {
  // in Django: path("api/announcements", views.all_announcements)
  app.post("/api/announcements", announcementController.create);
  app.get("/api/announcements", announcementController.getAll);
  app.get("/api/announcements/:id", announcementController.getOne);
  app.put("/api/announcements/:id", announcementController.update);
  app.delete("/api/announcements/:id", announcementController.delete);

  // when order matters example: the /:word route will be triggered when using /api/test/random as a URL
  // because it matches the pattern first, in order to make it work, need to put the /random route on TOP
  app.get("/api/test/:word", (req, res) => res.json("/test/:word"));
  app.get("/api/test/random", (req, res) => res.json("/test/random"));
};
