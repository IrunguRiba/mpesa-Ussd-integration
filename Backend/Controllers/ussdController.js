const express = require('express');

const handleUSSDRequest = (req, res) => {
    const { sessionId, serviceCode, phoneNumber, text } = req.body;
  
    let response = '';
  
    // Split the text input by '*' to get menu selections
    const textArray = text.split('*');
  
    if (text === '') {
        console.log('📥 Incoming USSD Request:', req.body);
      // This is the first request. Show the main menu
      response = `CON Welcome to MyService
  1. Check Balance
  2. Buy Airtime
  3. Exit`;
    } else if (text === '1') {
      // User selected "Check Balance"
      response = `END Your balance is KES 500`;
      
    } else if (text === '2') {
      // User selected "Buy Airtime"
      response = `CON Enter amount to buy:`;
    } else if (textArray[0] === '2' && textArray.length === 2) {
      // User entered amount to buy airtime
      const amount = textArray[1];
      response = `END You have successfully purchased KES ${amount} airtime.`;
    } else if (text === '3') {
      response = `END Thank you for using MyService. Goodbye!`;
    } else {
      response = `END Invalid input. Please try again.`;
    }
  
    res.set('Content-Type', 'text/plain');
    res.send(response);
  };
  
  module.exports = {
    handleUSSDRequest
  };
  