
const express = require('express');


exports.handleUSSDRequest = (req, res) => {
    const { sessionId, serviceCode, phoneNumber, text } = req.body;

    let response = "";

    if (text === "") {
        response = `CON Welcome to MyService
1. View Account
2. Exit`;
    } else if (text === "1") {
        response = "END Your account balance is KES 500";
    } else if (text === "2") {
        response = "END Thank you for using MyService";
    } else {
        response = "END Invalid input";
    }

    res.set("Content-Type", "text/plain");
    res.send(response);
};

// Optional callback handler
exports.handleUSSDCallback = (req, res) => {
    console.log("Callback received:", req.body);
    res.status(200).send("Callback received");
};
