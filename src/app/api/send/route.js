// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.From_Email;

export async function POST(req,res) {
  const {body} = await req.json() 
  const {email,subject, message} = body;
  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ["dhanishmohammed814@gmail.com",email],
      subject: subject,
      react:(<>
      <h1>{subject}</h1>
      <p>Thank you for contacting us!</p>
      <p>New Message Submitted:</p>
      <p>{message}</p></>),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
