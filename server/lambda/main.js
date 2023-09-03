const express = require('express');
const app = express();
const cors=require('cors');
const serverLess=require('serverless-http');

app.use(cors({origin:'http://127.0.0.1:5500'}));
app.use(express.json());

app.post('/.netlify/functions/main',(req,res)=>{
    res.json('hello world again');
    console.log(req.body.message);
})

exports.handler =serverLess(app);
  