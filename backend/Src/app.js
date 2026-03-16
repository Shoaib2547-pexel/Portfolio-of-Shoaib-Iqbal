const express=require('express');
const PostApi=require('./routes/email.route');
const cors=require('cors');

const app=express();

app.use(cors());
app.use(express.json());

app.use('/api/email',PostApi);


module.exports=app;