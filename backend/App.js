const express = require("express");
const connectDB = require("./config/db");
const employeeRoutes = require("./routes/employeeRoutes");
const teamRoutes = require("./routes/teamRoutes");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());

// Connect to DB
connectDB();

// Routes
app.use("/api", employeeRoutes);
app.use("/api", teamRoutes);


// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
