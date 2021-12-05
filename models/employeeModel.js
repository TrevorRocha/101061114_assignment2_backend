const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: "Please enter First Name.",
    },
    lastName: {
        type: String,
        required: "Please enter Last Name.",
    },
    emailId: {
        type: String,
        required: "Please enter Email.",
    },
});

const Employee = mongoose.model("employee", employeeSchema);
module.exports = Employee;