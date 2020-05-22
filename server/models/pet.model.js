const mongoose = require(`mongoose`);

const Pets = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "all Pets require a Name" ],
        minlength: [3, "your pet name should be at least pne character long"]

        
    },
    type:{
        type: String,
        required: [true, "please make sure to add in the type of pet"],
        minlength: [3, "your pet type should be at least pne character long"]
    },
    description: {
        type: String,
        required: [true, "please add in a description loser"],
        minlength: [5, "a description should be at least 5 characters long ... jerk "]
    },
    skillone:{
        type: String,
        required: [true, "thank you"]
    },
    skilltwo:{
        type: String,
        required: [false]

    },
    skillthree:{
        type: String,
        required: [false]
    },



}, {timestamps: true})


module.exports= Pets;