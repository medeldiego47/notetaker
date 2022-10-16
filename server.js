const express = require('express');
const path = require('path');
const PORT = process.env.port || 5000;
const app = express();
const api= require('./routes/apiroutes');
const html = require('./routes/htmlroutes');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(api);
app.use(html);

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})