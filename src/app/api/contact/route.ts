import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, faire, email, message } = body;

    if (!name || !faire || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Log the contact submission (swap with email service in production)
    console.log("=== New Booking Inquiry ===");
    console.log(`Name: ${name}`);
    console.log(`Faire: ${faire}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    console.log("===========================");

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
