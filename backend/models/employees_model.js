let mongoose = require("mongoose");

let employeesSchema = mongoose.Schema({
    employ_id: {
        type: String,
        required: true
    },
    employ_name: {
        type: String,
        required: true
    },
    exp: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    stack: {
        type: String,
        required: true
    }
});

let employees_model = mongoose.model("employees", employeesSchema);

module.exports = employees_model;
