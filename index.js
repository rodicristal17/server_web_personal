const mongoose = require("mongoose");
const { DB_USER, DB_PASSWORD, DB_HOST, IP_SERVER, API_VERSION } = require("./constants");
const app = require("./app")

//Create the port of entry
const port = process.env.POST || 3977;

//Conenting to database

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/`, (error) => {
    if (error) throw error;

    console.log('Conexión a la base de datos ha sido exitosa');

    app.listen(port, () => {
        console.log("#######################");
        console.log("####### API REST ######");
        console.log("#######################");
        console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}`);
    })
});