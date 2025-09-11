const express = require("express");
const connectDB = require("./config/db");
const employees_model = require("./models/employees_model");
const teams_model = require("./models/teams_model");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());

// Connect to DB
connectDB();

// Routes
app.post("/api/employee-entry", async (req, res) => {        // POST employee data
  try {
    const { employ_id, employ_name, exp, status, stack } = req.body;

    const employee = new employees_model({
      employ_id,
      employ_name,
      exp,
      status,
      stack
    });

    await employee.save();
    console.log("saved");
    res.status(201).json({ message: "Employee saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save employee" });
  }
});
app.get("/api/employee-view", async (req, res) => {          // GET all employees
  try {
    const data = await employees_model.find();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch employees" });
  }
});
app.post("/api/team-entry",async(req,res)=>{                 // POST team data
    try{
        const {team_name,count,members,task,deadline,assumed_date} = req.body;

        const teams= new teams_model({
            team_name,
            count,
            members,
            task,
            deadline,
            assumed_date
        })
        await teams.save();
        console.log("save");
        res.status(201).json({ message: "Teams saved successfully" });
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Failed to post teams"});
    }
})
app.get("/api/team-view", async (req, res) => {              // VIEW team data
  try {
    const data = await teams_model.find().populate("members"); 
    res.status(200).json(data);  
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to get the Teams data" });
  }
});


// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
