import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message, company, website } = await req.json();

    // Honeypot fields: bots often fill these
    if (company || website) {
      return Response.json(
        { success: false, message: "Spam detected." },
        { status: 400 },
      );
    }

    if (!name || !email || !message) {
      return Response.json(
        { success: false, message: "All fields are required." },
        { status: 400 },
      );
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "callumgovender06@gmail.com",
      replyTo: trimmedEmail,
      subject: `New portfolio message from ${trimmedName}`,
      text: `Name: ${trimmedName}
Email: ${trimmedEmail}

Message:
${trimmedMessage}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { success: false, message: "Failed to send email." },
        { status: 500 },
      );
    }

    console.log("Resend success:", data);

    return Response.json(
      {
        success: true,
        message: "Message sent successfully.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact route error:", error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong while sending your message.",
      },
      { status: 500 },
    );
  }
}
