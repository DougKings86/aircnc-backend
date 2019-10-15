const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const cors = require("cors");


const app = express();


mongoose.connect('mongodb+srv://aircnc_21:aircnc21@cluster0-p939u.mongodb.net/semana09?retryWrites=true&w=majority' ,{
    useNewUrlParser :true ,
    useUnifiedTopology : true
})

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/files', express.static(path.resolve(__dirname ,'..' ,  'uploads')));
app.listen(3333 , ()=> console.log('Listening port 3333'));