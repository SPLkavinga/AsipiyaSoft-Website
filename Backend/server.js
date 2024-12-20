const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const multer = require("multer");
const mysql = require("mysql");


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

// MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // Replace with your MySQL password
  database: "asipiya", // Replace with your database name
});



db.connect((err) => {
  if (err) {
    console.error("Database connection error:", err);
    return;
  }
  console.log("Connected to MySQL database");
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

// Get data
app.get("/api/data", (req, res) => {
  const query = "SELECT * FROM form_data";
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Database error");
      return;
    }
    res.json(results);
  });
});

// Delete data
app.delete("/api/data/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM form_data WHERE id = ?";
  db.query(query, [id], (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Database error");
      return;
    }
    res.sendStatus(200);
  });
});

// Update data by ID (update name and description)
app.put('/api/updata/:id', (req, res) => {
  const { name, description } = req.body;
  const { id } = req.params;

  const query = 'UPDATE form_data SET name = ?, description = ? WHERE id = ?'; // Modify with your actual table name
  db.query(query, [name, description, id], (err, result) => {
    if (err) {
      console.error('Error updating data:', err);
      return res.status(500).send('Error updating data');
    }
    if (result.affectedRows === 0) {
      return res.status(404).send('Career not found');
    }
    res.status(200).send('Data updated');
  });
});

// Route to save form data to database
app.post("/api/save", (req, res) => {
  const { name, description } = req.body;
  const descriptionPoints = description.split(",").map((point) => point.trim());

  const query = "INSERT INTO form_data (name, description) VALUES (?, ?)";
  db.query(query, [name, JSON.stringify(descriptionPoints)], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: "Failed to save data" });
      return;
    }
    res.send({ message: "Data saved successfully" });
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
