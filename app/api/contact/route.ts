/** @format */

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, service, message } = body;

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Create the email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; border: 1px solid #e5e7eb;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #1f2937; margin: 0; font-size: 24px; font-weight: bold;">New Contact Form Submission</h1>
            <div style="width: 50px; height: 3px; background: linear-gradient(90deg, #3b82f6, #06b6d4); margin: 15px auto;"></div>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
            <h2 style="color: #374151; margin: 0 0 15px 0; font-size: 18px;">Contact Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: 600; width: 120px;">Name:</td>
                <td style="padding: 8px 0; color: #1f2937;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Email:</td>
                <td style="padding: 8px 0; color: #1f2937;">
                  <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
                </td>
              </tr>
              ${
                phone
                  ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Phone:</td>
                <td style="padding: 8px 0; color: #1f2937;">
                  <a href="tel:${phone}" style="color: #3b82f6; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              `
                  : ''
              }
              ${
                service
                  ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Service:</td>
                <td style="padding: 8px 0; color: #1f2937;">${service}</td>
              </tr>
              `
                  : ''
              }
            </table>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px;">
            <h2 style="color: #374151; margin: 0 0 15px 0; font-size: 18px;">Message</h2>
            <div style="color: #1f2937; line-height: 1.6; white-space: pre-wrap;">${message}</div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-center; color: #6b7280; font-size: 14px;">
            <p style="margin: 0;">This email was sent from the contact form on bejjaniaudit.com</p>
            <p style="margin: 5px 0 0 0;">Received at: ${new Date().toLocaleString(
              'en-US',
              { timeZone: 'Asia/Beirut' }
            )} (Beirut Time)</p>
          </div>
        </div>
      </div>
    `;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // This will be updated when you verify your domain
      to: ['bejjani.tony@gmail.com'], // You can add multiple recipients here
      subject: `www.bejjaniaudit.com - new email from ${firstName} ${lastName}`,
      html: emailHtml,
      replyTo: email, // This allows you to reply directly to the person who submitted the form
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: 'Email sent successfully',
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
