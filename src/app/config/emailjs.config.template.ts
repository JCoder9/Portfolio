// EmailJS Configuration Template
// Copy this file to emailjs.config.ts and add your real credentials
// The actual emailjs.config.ts file is excluded from git for security

export const EMAILJS_CONFIG = {
  // Your EmailJS Service ID (from Email Services dashboard)
  SERVICE_ID: 'service_portfolio',
  
  // Your EmailJS Template ID (from Email Templates dashboard)  
  TEMPLATE_ID: 'contact_form',
  
  // Your EmailJS Public Key (from Account > General dashboard)
  PUBLIC_KEY: 'clwUpT41da1ykmMCk'
};

// Template variables that will be sent to EmailJS
// Make sure your EmailJS template uses these variable names:
// - {{from_name}} - sender's name
// - {{from_email}} - sender's email  
// - {{message}} - the message content
// - {{to_email}} - your email (jordanhiggins06@gmail.com)

// SETUP INSTRUCTIONS:
// 1. Go to https://dashboard.emailjs.com/
// 2. Get your Service ID from "Email Services"
// 3. Get your Template ID from "Email Templates"  
// 4. Get your Public Key from "Account" → "General"
// 5. Replace the placeholder values above
// 6. Your credentials will be safe and won't be uploaded to git