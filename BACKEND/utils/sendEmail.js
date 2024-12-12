import nodeMailer from "nodemailer"; // Importing nodemailer for sending emails

// Function to send emails using nodemailer
export const sendEmail = async (options) => {
    
    // Configuring the email transporter with SMTP settings
    const transporter = nodeMailer.createTransport({
        host: process.env.SMTP_HOST, // SMTP host from environment variables
        port: process.env.SMTP_PORT, // SMTP port
        service: process.env.SMTP_SERVICE, // Email service (e.g., Gmail)
        auth: {
            user: process.env.SMTP_MAIL, // SMTP email address
            pass: process.env.SMTP_PASSWORD, // SMTP email password
        },
    });

    // Defining email content and recipient details
    const mailOptions = {
        from: process.env.SMTP_MAIL, // Sender's email
        to: options.email, // Recipient's email
        subject: options.subject, // Subject of the email
        text: `NAME OF THE USER: ${options.name} \n\nMESSAGE: ${options.message}  \n\nEmail of User Who Sent The Message: ${options.userEmail}`,
    };

    // Sending the email using the configured transporter
    await transporter.sendMail(mailOptions);
};
