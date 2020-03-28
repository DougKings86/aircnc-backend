const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");

class App {
    constructor(){
        this.app = express();
        this.connect();
        this.middlewares();
        this.routes();
    }

    connect(){
        mongoose.connect(process.env.MONGO_URL ,{
            useNewUrlParser :true ,
            useUnifiedTopology : true
        });
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use('/files', express.static(path.resolve(__dirname ,'..' ,  'uploads')));
    }

    routes(){
        this.app.use(routes);
    }
}

module.exports = new App().app;