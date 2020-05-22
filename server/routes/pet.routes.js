const ProductController = require("../controllers/Pet.controller");

module.exports = (app) => {
    app.get("/api/pets", ProductController.index); 
    app.post("/api/pets", ProductController.create);
    app.get("/api/pets/random", ProductController.random);
    app.get("/api/pets/:id", ProductController.show);
    app.delete("/api/pets/:id", ProductController.sell);
    app.put("/api/pets/:id", ProductController.update);
   
  
    


}