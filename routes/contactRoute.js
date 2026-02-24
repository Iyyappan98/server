const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const EMAIL_TEMPLATE_CONTACT = require("../utils/emailTemplate");

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "All fields required" });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const finalHtml = EMAIL_TEMPLATE_CONTACT
      .replace(/{{name}}/g, name)
      .replace(/{{email}}/g, email)      
      .replace(/{{message}}/g, message)
      

    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `New Enquiry Contact - ${name}`,
      html: finalHtml,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Mail not sent" });
  }
});

module.exports = router;
