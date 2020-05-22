const mongoose = require('mongoose');

module.exports= (name) => {
mongoose.connect(`mongodb://localhost/${name}`, {
    useNewUrlParser:true,
    useUnifiedTopology:true

})
    .then(() => console.log(`Successful connection yo ${name}`))
    .catch(err => console.log(err)); 

}