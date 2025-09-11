let mongoose = require("mongoose");

let teamsSchema = mongoose.Schema({
    team_name: {
        type: String,
        required: true
    },
    count:{
        type:String,
        required:true
    },
    members: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "employees",  // reference to employees_model
        required: true
        }
    ],
    task:{
        type:String,
        required:true
    },
    deadline:{
        type:String,
        required:true
    },
    assumed_date:{
        type:String,
        required:false
    }
})

let teams_model = mongoose.model("teams",teamsSchema);

module.exports = teams_model;