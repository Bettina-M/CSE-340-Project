const express = require('express');

const app = express();

/* ******************************************
 * Default GET route
 * ***************************************** */
app.get("/", (req,res) => {res.send("Welcome home!")})


const PORT = 3000;

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT);
    else 
        console.log("Error occurred, server can't start", error);
    }
);