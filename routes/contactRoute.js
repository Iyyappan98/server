const express = require("express");
const router = express.Router();
const axios = require("axios");
const EMAIL_TEMPLATE_CONTACT = require("../utils/emailTemplate");

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields required",
      });
    }

    const finalHtml = EMAIL_TEMPLATE_CONTACT
      .replace(/{{name}}/g, name)
      .replace(/{{email}}/g, email)
      .replace(/{{phone}}/g, phone)
      .replace(/{{message}}/g, message);

    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Uma Cab Contact",
          email: process.env.SENDER_EMAIL,
        },
        to: [
          {
            email: process.env.ADMIN_EMAIL,
          },
        ],
        replyTo: {
          email: email,
          name: name,
        },
        subject: `New Enquiry Contact - ${name}`,
        htmlContent: finalHtml,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    res.json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {
    console.log(error.response?.data || error.message);

    res.status(500).json({
      success: false,
      message: "Mail not sent",
    });
  }
});

module.exports = router;