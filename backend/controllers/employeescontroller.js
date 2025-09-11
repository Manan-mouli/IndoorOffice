const employees_model = require("../models/employees_model");

let employee_entry = async (req, res) => {        // POST employee data
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
};

let employee_view = async (req, res) => {          // GET all employees
  try {
    const data = await employees_model.find();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch employees" });
  }
};

module.exports = {employee_view,employee_entry}