const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8080;
const infoServer = require('./app');
const cors = require('cors');
mongoose.connect('mongodb+srv://Anand:Anand@cluster0.wvgskol.mongodb.net/insta-clone?retryWrites=true&w=majority',(err)=>{
    if(err){ 
        console.log(err);
    }
    else{
        console.log('database connected')
    }
})

app.use(cors());
app.use(express.static('public'))
app.use(bodyparser.json());
app.use('/',infoServer);



app.listen(PORT, ()=>{
    console.log(`Server is listen at ${PORT}`)
})