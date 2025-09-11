const express = require("express");
const router = express.Router();
const { employee_entry, employee_view } = require("../controllers/employeescontroller");

// Employee routes
router.post("/employee-entry", employee_entry);
router.get("/employee-view", employee_view);

module.exports = router;
