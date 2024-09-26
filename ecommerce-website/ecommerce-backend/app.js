const express = require("express");
const app = express();  


app.use(express.json());
app.use(express.urlencoded({ extended : true }));


app.use(require("./allRoutes/routes"))


const port = process.env.PORT || 3004;
app.listen(port, ()=>{
    console.log("Server Running with port ", port);
})  