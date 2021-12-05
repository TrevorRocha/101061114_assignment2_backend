const express = require('express');
const employeeModel = require("../models/employeeModel");
let router = express.Router();

//get employees
router.get("/", async (req, res) => {
    res.setHeader("Access-Controll-Allow_Origin", "*");
    let employees = await employeeModel.find({});
    try {
        res.status(200).send(employees);
    } catch (err) {
        res.status(500).send("Error" + err);
    }
});

router.post("/", async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Content cannont be empty.",
        });
    }
    let employees = new employeeModel(req.body)
    try{
        await employees.save();
        res.status(201).send("A new Employee resource is created.");
    } catch (err) {
        res.status(500).send("Error" + err);
    }
});

router.get("/:id", async (req, res) => {
    if (!req.params.id){
        return res.status(400).send({
            message: "ID cannont be empty.",
        })
    }
    let data = req.body;

    try {
        let employees = await employeeModel.findById(req.params.id);
        res.status(200).send(employees);
    } catch (err) {
        res.status(500).send("Error" + err);
    }
});

router.put("/:id", async (req, res) => {
    if (!req.params.id || !req.body){
        return res.status(400).send({
            message: "Content cannont be empty.",
        })
    }
    let data = req.body;

    try {
        let employees = await employeeModel.findByIdAndUpdate(req.params.id, data, { new: true });
        res.status(200).send(employees);
    } catch (err) {
        res.status(500).send("Error" + err);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        let employees = await employeeModel.findOneAndRemove(req.params.id);
        res.status(204).send(employees);
    } catch (err) {
        res.status(500).send("Error" + err);
    }
});

module.exports = router;