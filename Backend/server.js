const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const multer = require("multer");


const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Email configuration
const transporter = nodemailer.createTransport({
  service: "gmail", // Replace with your email provider
  auth: {
    user: "lahiru.20211349@iit.ac.lk", // Replace with your email
    pass: "sbxz mpde zffe dctg", // Replace with your app-specific password
  },
});

// Route to handle form submission
app.post("/send-email", (req, res) => {
  const { firstName, lastName, email, phoneNumber, message, interests } =
    req.body;

  const mailOptions = {
    from: email,
    to: "lahiru.20211349@iit.ac.lk",
    subject: `New Contact Form Submission from ${firstName} ${lastName}`,
    text: `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Phone Number: ${phoneNumber}
      Message: ${message}
      Interested in: ${interests.join(", ")}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send("Error sending email");
    }
    res.status(200).send("Email sent successfully");
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});





// Middleware
app.use(cors());

// File upload setup
const upload = multer({ dest: "uploads/" });

// POST route to handle form submissions
app.post("/apply", upload.single("image"), async (req, res) => {
    const { name, email, contactNumber, nicNumber, linkedinProfile, position, message } = req.body;
    const file = req.file;

    try {
        // Configure nodemailer
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "lahiru.20211349@iit.ac.lk", // Replace with your email
                pass: "sbxz mpde zffe dctg", // Replace with your email password or app password
            },
        });

        const mailOptions = {
            from: "your-email@gmail.com",
            to: "lahiru.20211349@iit.ac.lk",
            subject: `Job Application from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nContact Number: ${contactNumber}\nNIC Number: ${nicNumber}\nLinkedIn Profile: ${linkedinProfile}\nPosition: ${position}\nMessage: ${message}`,
            attachments: file ? [{
                filename: file.originalname,
                path: file.path,
            }] : [],
        };

        await transporter.sendMail(mailOptions);
        res.status(200).send("Application submitted successfully!");
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Failed to submit the application.");
    }
});


