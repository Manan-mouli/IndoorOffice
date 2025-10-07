const express = require("express");
const connectDB = require("./config/db");
const employeeRoutes = require("./routes/employeeRoutes");
const teamRoutes = require("./routes/teamRoutes");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const Teams = require("./models/teams_model")

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to DB
connectDB();

// Routes
app.use("/api", employeeRoutes);
app.use("/api", teamRoutes);



app.get("/api/my-teams/:employeeId", async (req, res) => {
  console.log("hiii");
  try {
    const employeeId = req.params.employeeId;
    console.log("EmployeeId received:", employeeId);

    // Check if valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(employeeId)) {
      console.log("Invalid ObjectId");
      return res.status(400).json({ message: "Invalid employeeId" });
    }

    const teams = await Teams.find({ 
      members: employeeId  // Try string first
    }).populate("members", "employ_name employ_id");

    console.log("Teams found:", teams);
    res.json(teams);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});



// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
