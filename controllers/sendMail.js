const nodemailer = require('nodemailer');
require('env2')('./config.env');

module.exports = (req, res) => {
  const { email, message, name } = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
      user: 'noreply.hbnb@gmail.com',
      pass: process.env.MailPass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: 'noreply.hbnb@gmail.com',
    to: email,
    subject: name,
    text: message,
  };

  transporter.sendMail(mailOptions, (err, response) => {
    if (err) {
      console.log('Error in sending email', err);
    } else {
      res.send(response);
    }
  });
};
