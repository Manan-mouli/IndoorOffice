const teams_model = require("../models/teams_model");

let team_entry = async(req,res)=>{                 // POST team data
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
};
let team_view = async (req, res) => {              // VIEW team data
  try {
    const data = await teams_model.find().populate("members"); 
    res.status(200).json(data);  
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to get the Teams data" });
  }
};

module.exports={team_entry,team_view};