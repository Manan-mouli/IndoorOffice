const express = require("express");
const router = express.Router();
const { team_entry, team_view } = require("../controllers/teamscontroller");


router.post("/team-entry", team_entry);
router.get("/team-view", team_view);

module.exports = router;
