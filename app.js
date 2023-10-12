
const express = require('express')
const app = express()
const urlprefix = '/api'
const mongoose =require('mongoose')

const fs = require('fs');
const cert = fs.readFileSync('Keys/certificate.pem');
const options ={
    server:{ sslCA: cert}};
const connstring ='mongodb+srv://Td:dBSSAy6VstpXt3b3@cluster0.j2ddgmd.mongodb.net/?retryWrites=true&w=majority'

const pRoutes = require("./routes/posts");
const userRoutes = require('./routes/user')

mongoose.connect(connstring)
.then(()=>
    {
        console.log('Connected')
    })
    .catch(()=>
    {
        console.log('Not connected')
    }, options);


    app.use(express.json())
    app.use((reg,res,next)=>
    {
        res.setHeader('Access-Control-Allow-Origin','*');
        res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization');
        res.setHeader('Access-Control-Allow-Methods','*');
        next();
    });

    app.get(urlprefix + '/', (req, res)=>{
        res.send('Yes')

    })

   app.use(urlprefix+'/posts',pRoutes)
   app.use(urlprefix+'/users', userRoutes)

    module.exports=app;

