const express = require('express');
const app = express();
const Router=express.Router();
const cors=require('cors');
const serverLess=require('serverless-http');

app.use(cors());
app.use(express.json());


Router.get('/.netlify/functions/main',(req,res)=>{
    res.json('hello world again');
    console.log(req.body.message);
})

Router.post('/.netlify/functions/main',(req,res)=>{
    res.json('response is yours bitch');
})

app.use('/',Router);
exports.handler =serverLess(app);
  