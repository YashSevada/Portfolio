const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


// Nodemailer Configuration
const transporter = nodemailer.createTransport({
service: 'gmail',
  auth: {
    user: 'yashsevadaportfolio@gmail.com',
    pass: 'eiju fprp awct tylp',
  },
});


app.post("/send", async (req, res) => {
  const { firstName, lastName, email, phone, subject, message } = req.body;

  try {
    // Send Email
    await transporter.sendMail({
      from: 'yashsevadaportfolio@gmail.com',
      to: 'yashsevada2000@gmail.com',
      subject: 'Portfolio : Comments on Portfolio Website',
      text: `Hi Yash, 
      ${firstName} ${lastName} has send some message to you from portfolio website.
      Name : ${firstName} ${lastName}
      Email : ${email}
      Phone Number : ${phone}
      Subject : ${subject}
      Message : ${message}
      `,  
    })
    
    res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error sending message.");
  }
});