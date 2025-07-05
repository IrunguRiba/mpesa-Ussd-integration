const express = require('express');

const handleUSSDRequest = (req, res) => {
  let { sessionId, serviceCode, phoneNumber, text } = req.body;
  serviceCode = serviceCode.trim();
  text = text.trim();
  console.log(' Incoming USSD Request:', req.body);
  let response = '';
  const textArray = text === '' ? [] : text.split('*');

  if (text === '') {
    response = `CON Welcome to MyService
1. Check Balance
2. Buy Airtime
3. Exit`;
  } else if (text === '1') {
    response = `END Your balance is KES 500`;
  } else if (text === '2') {
    response = `CON Enter amount to buy:`;
  } else if (textArray[0] === '2' && textArray.length === 2) {
    const amount = textArray[1];
    response = `END You have successfully purchased KES ${amount} airtime.`;
  } else if (text === '3') {
    response = `END Thank you for using MyService. Goodbye!`;
  } else {
    response = `END Invalid input. Please try again.`;
  }

  console.log('USSD Response:', response);

  res.set('Content-Type', 'text/plain');
  res.send(response);
};

module.exports = {
  handleUSSDRequest
};
