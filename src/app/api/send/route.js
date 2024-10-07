// import { EmailTemplate } from '../../../components/EmailTemplate';
// import { NextResponse } from "next/server";
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.From_Email;

// export async function POST(req,res) {
//   const {body} = await req.json() 
//   const {email,subject, message} = body;
//   try {
//     const { data, error } = await resend.emails.send({
//       from: fromEmail,
//       to: ["dhanishmohammed814@gmail.com",email],
//       subject: subject,
//       react:(<>
//       <h1>{subject}</h1>
//       <p>Thank you for contacting us!</p>
//       <p>New Message Submitted:</p>
//       <p>{message}</p></>),
//     });

//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// }

import { NextResponse } from "next/server";
import { Resend } from 'resend';

// Initialize Resend instance with API key from environment variable
const resend = new Resend(re_123456789);
const fromEmail = "dhanishmohammed814@gmail.com";

export async function POST(req) {
  try {
    // Parse the request body to extract email, subject, and message
    const { email, subject, message } = await req.json();

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: fromEmail, // Sender's email from environment variable
      to: [email, "dhanishmohammed814@gmail.com"], // Multiple recipients
      subject: subject,
      html: `
        <div>
          <h1>${subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New Message Submitted:</p>
          <p>${message}</p>
        </div>
      `,
    });

    // Check if there's an error from Resend API
    if (error) {
      return NextResponse.json({ error: 'Failed to send email', details: error }, { status: 500 });
    }

    // Respond with success
    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    // Handle and return any errors that occur during the process
    return NextResponse.json({ error: 'Server error', details: error.message }, { status: 500 });
  }
}

