// require("dotenv").config();

// const express = require("express");
// const cors = require("cors");
// const nodemailer = require("nodemailer");

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.post("/contact", async (req, res) => {
//   const { name, email, phone, message } = req.body;

//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "Office@arkinspaces.com",
//         pass: "ukabzuzgatcnevzf", 
//       },
//     });

//     await transporter.sendMail({
//       from: email,
//       to: "office@arkinspaces.com",
//       subject: "New Contact Form Submission - Arkin Spaces",
//       html: `
//         <h2>New Enquiry</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Message:</strong> ${message}</p>
//         <hr/>
//         <p><strong>Company:</strong> Arkin Spaces</p>
//         <p><strong>Location:</strong> Basaveshwaranagar, Bangalore</p>
//       `,
//     });

//     res.status(200).json({ message: "Email sent successfully" });

//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Email sending failed" });
//   }
// });

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });
// auth: {
//   user: process.env.EMAIL_USER,
//   pass: process.env.EMAIL_PASS,
// }

// require("dotenv").config();

// const express = require("express");
// const cors = require("cors");
// const nodemailer = require("nodemailer");

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.post("/contact", async (req, res) => {
//   const { name, email, phone, message } = req.body;

//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: process.env.EMAIL_USER,
//       subject: "New Contact Form Submission - Arkin Spaces",
//       html: `
//         <h2>New Enquiry</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Message:</strong> ${message}</p>
//       `,
//     });

//     res.status(200).json({ message: "Email sent successfully" });

//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Email sending failed" });
//   }
// });

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Test route (optional but recommended)
app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

// Contact Route
app.post("/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
   const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,       
    secure: false,   
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
  },
});

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission - Arkin Spaces",
      html: `
        <h2>New Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.status(200).json({ message: "Email sent successfully" });

  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ error: "Email sending failed" });
  }
});

// IMPORTANT: Use Render's dynamic PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});