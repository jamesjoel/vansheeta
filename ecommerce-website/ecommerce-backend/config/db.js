const mongoose = require('mongoose')
let dbUrl = require("../config/constants");
// const db = "mongodb+srv://vanshita:sys_ecommmerce@cluster0.4ab7w.mongodb.net/sys_ecommerce?retryWrites=true&w=majority&appName=Cluster0"
const db = dbUrl;
mongoose.connect(db).then(()=>{
        console.log("Connected")
    }).catch((err)=>{
        
        console.log("NOT ----- CONNCETED -----", err)
    })

