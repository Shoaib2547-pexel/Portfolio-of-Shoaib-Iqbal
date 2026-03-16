const nodemailer = require("nodemailer");

async function sendTestEmail(req, res) {
    const { Uname, Uemail, Umsg } = req.body; // Assuming these come from your form

   

    // 1. Create the transporter for Production (Gmail)
    const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: process.env.GMAIL,      // Your Gmail address
            pass: process.env.GMAIL_PASS, // Your 16-character App Password
        },
    });

    try {
        // 2. Send the email
        const info = await transporter.sendMail({
            from: `"${Uname}" <${Uemail}>`, 
            to: "shoaibiqbal2547@gmail.com",        // Your inbox
            replyTo: Uemail,                         // Clicking 'Reply' will go to the client
            subject: `Portfolio Inquiry from ${Uname}`,
            text: Umsg,
            html: `
                <h3>New Message from Portfolio</h3>
                <p><strong>Name:</strong> ${Uname}</p>
                <p><strong>Email:</strong> ${Uemail}</p>
                <p><strong>Message:</strong></p>
                <p>${Umsg}</p>
            `,
        });

        console.log("Message sent: %s", info.messageId);
        
        // 3. Send response back to frontend
        return res.status(200).json({ success: true, message: "Email sent!" });

    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ success: false, error: error.message });
    }
}

module.exports = sendTestEmail;