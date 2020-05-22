const mongoose = require('mongoose'),
    PetSchema = require('../models/pet.model'),
    Pets = mongoose.model("Pets", PetSchema);

    class PetController{
        index(req, res){
            Pets.find().sort({type: "ascending"})
                    .then(allpets => res.json(allpets))
                    .catch(err => res.json(err))
        }
        create(req, res){
            Pets.create(req.body)
                    .then(newPet => res.json(newPet))
                    .catch(err => res.json(err))
        }
        show(req, res){
            Pets.findById({_id:req.params.id})
                    .then(onePet => res.json(onePet))
                    .catch(err => res.json(err))
        }
        update(req, res){
            Pets.findByIdAndUpdate({_id:req.params.id}, req.body, {runValidators: true})
                    .then(editPet => res.json(editPet))
                    .catch(err => res.json(err))
        }
        sell(req, res){
            Pets.deleteOne({_id:req.params.id})
                .then(message => res.json({message: "Product has been sold"}))
                .catch(err => res.json(err))
        }
        random(req, res){
            Pets.find()
                .then(allpets => {
                    let rand = Math.floor(Math.random() *allpets.length)
                    res.json(allproducts[rand]);
                })
                .catch(err => res.json(err))
        }
    
    
    
    
    
    }
    
    module.exports = new PetController();