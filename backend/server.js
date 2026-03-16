require('dotenv').config();
const app=require('./Src/app');

app.listen(3000,(req,res)=>{
    console.log('server is running on port 3000');
})