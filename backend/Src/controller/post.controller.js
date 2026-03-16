const sendTestEmail=require('../services/nodemailer.services');
async function PostEmail(req,res){

    sendTestEmail(req,res);

}

module.exports=PostEmail;