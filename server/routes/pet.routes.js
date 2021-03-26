const PetController = require("../controllers/pet.controller");

module.exports = (app) => {
  app.get("/api/pets/", PetController.index);
  app.get("/api/pets/:id", PetController.show);
  app.put("/api/pets/update/:id", PetController.update);
  app.post("/api/pets/new", PetController.create);
  app.delete("/api/pets/delete/:id", PetController.destroy)
}