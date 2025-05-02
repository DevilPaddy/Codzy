const nodemailer = require("nodemailer");
const {
    generateVerificationEmail,
    generateWelcomeEmail,
    generateResetPasswordEmail,
    generateResetSuccessEmail
  } = require('./emailTemplets')

const ownerEmail = process.env.OWNER_EMAIL;
const appPassword = process.env.EMAIL_APP_PASS_KEY;

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: ownerEmail,
    pass: appPassword,
  },
});

// Send Verification Email
const sendVerificationEmail = async (userEmail, code) => {
  const htmlContent = generateVerificationEmail(code);

  await transporter.sendMail({
    from: '"VoxBuilder" <no-reply@voxbuilder.com>',
    to: userEmail,
    subject: "Verify Your Email Address",
    html: htmlContent,
  });
};

// Send Welcome Email
const sendWelcomeEmail = async (userEmail, userName) => {
  const htmlContent = generateWelcomeEmail(userName);

  await transporter.sendMail({
    from: '"VoxBuilder" <no-reply@voxbuilder.com>',
    to: userEmail,
    subject: "Welcome to VoxBuilder!",
    html: htmlContent,
  });
};

// Send Password Reset Email
const sendPasswordReset = async (userEmail, resetLink) => {
  const htmlContent = generateResetPasswordEmail(userEmail, resetLink);

  await transporter.sendMail({
    from: '"VoxBuilder" <no-reply@voxbuilder.com>',
    to: userEmail,
    subject: "Reset Your Password",
    html: htmlContent,
  });
};

// Send Password Reset Success Email
const sentResetSuccessEmail = async (userEmail) => {
  const htmlContent = generateResetSuccessEmail();

  await transporter.sendMail({
    from: '"VoxBuilder" <no-reply@voxbuilder.com>',
    to: userEmail,
    subject: "Password Reset Successful",
    html: htmlContent,
  });
};

module.exports = {
  sendVerificationEmail,
  sendWelcomeEmail,
  sendPasswordReset,
  sentResetSuccessEmail,
};
