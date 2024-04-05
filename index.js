import express from 'express';
import {dirname} from 'path';
import {fileURLToPath} from 'url';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) =>{
    var userEnteredPassword = "iLoveProgramming";
    if(userEnteredPassword === req.body["password"]){
    res.sendFile(__dirname + "/public/secrets.html");
    }
    else{
        res.sendFile(__dirname + "/public/tryAgain.html")
    }
});

app.listen(port, (req, res) =>{
   console.log(`server running on port ${port}`);
});