
// generateVerificationEmail.js
const generateVerificationEmail = (code) => {
  return `
    <html>
      <body style="font-family: Arial, sans-serif; background-color: #f8f9fa; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #4CAF50;">Verify Your Email</h2>
          <p>Thank you for signing up! Please use the following code to verify your email address:</p>
          <h3 style="font-size: 24px; color: #007BFF;">${code}</h3>
          <p>This code will expire in 10 minutes.</p>
          <p style="font-size: 14px; color: #888;">If you did not request this, please ignore this email.</p>
        </div>
      </body>
    </html>
  `;
};

// generateWelcomeEmail.js
const generateWelcomeEmail = (name) => {
  return `
    <html>
      <body style="font-family: Arial, sans-serif; background-color: #f8f9fa; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #28a745;">Welcome, ${name}!</h2>
          <p>We're excited to have you on board! Your account is now verified and ready to use.</p>
          <p>If you need any help, feel free to contact our support team.</p>
          <p>Best Regards,<br/>The Team</p>
        </div>
      </body>
    </html>
  `;
};


// generateResetPasswordEmail.js
function generateResetPasswordEmail(userEmail, resetLink) {
  return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
          <h2 style="color: #333;">Hello ${userName || "User"},</h2>
          <p>We received a request to reset your password. Click the button below to choose a new password:</p>
          
          <div style="text-align: center; margin: 30px 0;">
              <a href="${resetLink}" style="background-color: #007bff; color: white; padding: 10px 20px; 
                  text-decoration: none; border-radius: 5px; font-weight: bold;">
                  Reset Password
              </a>
          </div>
          
          <p>If you didn't request a password reset, you can safely ignore this email.</p>
          <p>This link will expire in 10 minutes.</p>
          
          <p>Thanks,<br/>Your App Team</p>
      </div>
  `;
}

// generateResetSuccessEmail.js
const generateResetSuccessEmail = () => {
  return `
    <html>
      <body style="font-family: Arial, sans-serif; background-color: #f8f9fa; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #28a745;">Password Reset Successful</h2>
          <p>Your password has been successfully reset. You can now log in with your new password.</p>
          <p>If you did not request this change, please contact our support team immediately.</p>
        </div>
      </body>
    </html>
  `;
};



module.exports = {
  generateVerificationEmail,
  generateWelcomeEmail,
  generateResetPasswordEmail,
  generateResetSuccessEmail
}