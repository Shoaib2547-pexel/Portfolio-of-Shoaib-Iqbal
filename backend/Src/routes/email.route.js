const express=require('express');
const PostController=require('../controller/post.controller')

const router=express.Router();

router.post('/sendemail',PostController)


module.exports=router;