import { NextResponse } from "next/server";
import { saveContact } from "@/lib/db";
import { sendBookingNotification } from "@/lib/ses";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, faire, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const contactData = { name, faire: faire || undefined, email, message };

    // Persist to SQLite
    saveContact(contactData);

    console.log("=== New Booking Inquiry ===");
    console.log(`Name: ${name}`);
    console.log(`Faire: ${faire || "(not specified)"}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    console.log("===========================");

    // Send notification email to owner
    try {
      await sendBookingNotification(contactData);
    } catch (sesError) {
      console.error("SES email failed (submission still saved):", sesError);
    }

    // Uncomment when ready to send confirmation to customer
    // try {
    //   await sendCustomerConfirmation(contactData);
    // } catch (confirmError) {
    //   console.error("Customer confirmation email failed:", confirmError);
    // }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
