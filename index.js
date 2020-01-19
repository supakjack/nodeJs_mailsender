const nodemailer = require('nodemailer');

// config สำหรับของ gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'supakjack@gmail.com', // your email
      pass: '----' // your email password
    }
  });

  let mailOptions = {
    from: 'supakjack@gmail.com',                // sender
    to: '60160027@go.buu.ac.th',                // list of receivers
    subject: 'Hello from sender',              // Mail subject
    html: '<b>Do you receive this mail?</b>'   // HTML body
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });