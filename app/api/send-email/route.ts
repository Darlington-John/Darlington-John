import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

const email = process.env.EMAIL;
const password = process.env.EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: email,
        pass: password,
    },
});

export async function POST(req: NextRequest) {
    try {
        const body = await req.json(); 
        const { name, email: senderEmail, message } = body;

        if (!name || !senderEmail || !message) {
            return new Response(JSON.stringify({ error: 'All fields are required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        
        const mailOptions = {
            from: `${name} <${senderEmail}>`,
            to: process.env.EMAIL,
            subject: `New message from ${name}`,
            text: message,
            html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${senderEmail}</p>
                   <p><strong>Message:</strong><br>${message}</p>`,
        };

        
        await transporter.sendMail(mailOptions);

        
        return new Response(
            JSON.stringify({ message: 'Email sent successfully' }),
            {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Failed to send email' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
