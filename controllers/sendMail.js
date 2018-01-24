const nodemailer = require('nodemailer');
require('env2')('./config.env');

module.exports = (req, res) => {
  const { email, message, name } = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
      user: process.env.Email,
      pass: process.env.MailPass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: process.env.Email,
    to: email,
    subject: name,
    text: message,
  };

  transporter.sendMail(mailOptions, (err, response) => {
    if (err) {
      res.status(500).send('Error in sending email', err);
    } else {
      res.send(response);
    }
  });
};
