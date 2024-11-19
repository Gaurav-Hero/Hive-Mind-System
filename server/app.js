import express from 'express'
import dotenv from 'dotenv'

const app = express();

dotenv.config();

const port = process.env.PORT || 3000;

app.get('/' ,(req , res) => {
    res.send("Hello THis is testing ?");
})

app.listen(port , (err) => {
    if(err) throw err;
    console.log(`Server is Live @ http://localhost:${port}`);
})

