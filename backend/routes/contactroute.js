import express from 'express';
import Contact from '../models/Contact.js';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();
const app = express();

app.post('/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Check if the same query already exists
        const exist = await Contact.findOne({ email, message });
        if (exist) {
            return res.send({ success: false, error: 'You have already contacted us with the same query.' });
        }

        // Save to database
        const result = await Contact.create({ name, email, message });

        // Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                admin: process.env.RECEIVE_EMAIL, // Your email
                user: process.env.EMAIL_USER, // Your email
                pass: process.env.EMAIL_PASS, // App Password (not your actual email password)
            },
        });

        // **Email to User**
        const userMailOptions = {
            from: process.env.EMAIL_USER,
            to: email, // Send confirmation email to the user
            subject: 'Prathmesh Cyber Force - Contact Confirmation',
            html: `
                <h2>Welcome to Prathmesh Cyber Force</h2>
                <p>Hello ${name},</p>
                <p>Thank you for contacting us. We have received your message and will get back to you soon.</p>
                <p>Best regards,</p>
                <p>Prathmesh Cyber Force Team</p>
            `,
        };

        // **Email to Admin (You)**
        const adminMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECEIVE_EMAIL, // Your email to receive contact details
            subject: 'New Contact Form Submission - Prathmesh Cyber Force',
            html: `
                <h2>New Contact Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
                <hr>
                <p>This message was sent from your website contact form.</p>
            `,
        };

        // Send emails
        await transporter.sendMail(userMailOptions); // Confirmation to user
        await transporter.sendMail(adminMailOptions); // Contact details to admin

        console.log('Emails sent successfully.');

        res.json({ success: true, message: 'Thanks for contacting us, we will get back to you soon.' });
        console.log(result);

    } catch (error) {
        console.error('Error creating contact:', error);
        res.status(500).send('Internal server error occurred');
    }
});

export default app;
