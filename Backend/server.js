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
    user: "n.chaminducodez@gmail.com", // Replace with your email
    pass: "ehbc wrmr tuav ceay", // Replace with your app-specific password
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

app.post("/send-email", (req, res) => {
  const { firstName, lastName, email, phoneNumber, message, interests } = req.body;
  
  console.log('User email:', email);  // Check if the email is being received

  // Insert the form data into the email_details table
  const query = `
    INSERT INTO email_details (firstName, lastName, email, phoneNumber, message, interests)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  
  // Convert the interests array into a string (if it is an array)
  const interestsString = interests.join(", ");

  db.query(query, [firstName, lastName, email, phoneNumber, message, interestsString], (err, result) => {
    if (err) {
      console.error('Database error:', err); // Log error if saving to the database fails
      return res.status(500).send("Error saving data to the database");
    }

    console.log('Data saved to the database:', result);

    // Send email to both the user and your email
    const mailOptions = {
      from: email,
      to: ["n.chaminducodez@gmail.com", email], // Send to both your email and the user's email
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Phone Number: ${phoneNumber}
        Message: ${message}
        Interested in: ${interestsString}
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error); // Log error if sending fails
        return res.status(500).send("Error sending email");
      }
      console.log('Email sent:', info);  // Log the successful email send
      res.status(200).send("Email sent successfully and data saved");
    });
  });
});

app.get("/get-email-details", (req, res) => {
  // Query to get all entries from the email_details table
  const query = "SELECT * FROM email_details";
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Database error:', err); // Log error if fetching fails
      return res.status(500).send("Error fetching data from the database");
    }

    console.log('Fetched data from the database:', results);

    // Send the fetched data as a JSON response 
    res.status(200).json(results);
  });
});




// API endpoint to fetch career names to the career page
app.get('/api/careers', (req, res) => {
  const query = 'SELECT name FROM form_data';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching careers:', err);
      res.status(500).json({ error: 'Failed to fetch career data' });
    } else {
      res.json(results);
    }
  });
});


// Route to get vacancy details by ID for the career page
app.get('/api/career/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT name, description FROM form_data WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error('Error fetching career details:', err);
      return res.status(500).send('Internal Server Error');
    }
    if (results.length === 0) {
      return res.status(404).send('Career not found');
    }
    res.json(results[0]);
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
    // Save the form data into the career_details table
    const query = `
      INSERT INTO career_details (name, email, contactNumber, nicNumber, linkedinProfile, position, message, filePath)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    // If there is an uploaded file, save its path; otherwise, save NULL
    const filePath = file ? file.path : null;

    // Wrapping the db.query in a Promise to allow using await
    const saveDataToDb = new Promise((resolve, reject) => {
      db.query(query, [name, email, contactNumber, nicNumber, linkedinProfile, position, message, filePath], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    // Wait for the data to be saved to the database
    await saveDataToDb;

    console.log('Data saved to the database');

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "n.chaminducodez@gmail.com", // Replace with your email
        pass: "ehbc wrmr tuav ceay", // Replace with your email password or app password
      },
    });

    const mailOptions = {
      from: "n.chaminducodez@gmail.com",  // Your email address
      to: ["n.chaminducodez@gmail.com", email],  // Send to both your email and the user's email
      subject: `Job Application from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Contact Number: ${contactNumber}
        NIC Number: ${nicNumber}
        LinkedIn Profile: ${linkedinProfile}
        Position: ${position}
        Message: ${message}
      `,
      attachments: file ? [{
        filename: file.originalname,
        path: file.path,
      }] : [],
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).send("Application submitted successfully!");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Failed to submit the application.");
  }
});

app.get("/applications", async (req, res) => {
  try {
    const query = "SELECT * FROM career_details";
    db.query(query, (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Database query failed" });
      } else {
        res.json(results);
      }
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});


