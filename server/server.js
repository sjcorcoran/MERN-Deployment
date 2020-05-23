const express = require("express"),
        app=express(),
        cors = require("cors"),
        port=8000,
        db= "the-test"
        server= app.listen(port, () => console.log(`listening on port ${port}`));

app.use(cors());
app.use(express.json());

require("./config/database.config")(db);
require("./routes/pet.routes")(app);