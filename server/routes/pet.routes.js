const PetController = require("../server/controllers/pet.controller");

module.exports = (app) => {
    app.get("/api/pets", PetController.index); 
    app.post("/api/pets", PetController.create);
    app.get("/api/pets/random", PetController.random);
    app.get("/api/pets/:id", PetController.show);
    app.delete("/api/pets/:id", PetController.sell);
    app.put("/api/pets/:id", PetController.update);
   
  
    


}