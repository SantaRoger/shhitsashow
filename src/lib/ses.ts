import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({
  region: process.env.AWS_SES_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

const FROM_EMAIL = process.env.SES_FROM_EMAIL || "nel@mail.shhitsa.show";
const TO_EMAIL = process.env.SES_TO_EMAIL || "nel@shhitsa.show";

interface ContactData {
  name: string;
  faire?: string;
  email: string;
  message: string;
}

export async function sendBookingNotification(data: ContactData) {
  const command = new SendEmailCommand({
    Source: FROM_EMAIL,
    Destination: { ToAddresses: [TO_EMAIL] },
    Message: {
      Subject: {
        Data: `New Booking Inquiry from ${data.name}${data.faire ? ` — ${data.faire}` : ""}`,
      },
      Body: {
        Text: {
          Data: [
            `Name: ${data.name}`,
            `Faire: ${data.faire || "(not specified)"}`,
            `Email: ${data.email}`,
            "",
            "Message:",
            data.message,
          ].join("\n"),
        },
        Html: {
          Data: `
            <h2>New Booking Inquiry</h2>
            <table style="border-collapse:collapse;">
              <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Name</td><td>${escapeHtml(data.name)}</td></tr>
              <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Faire</td><td>${escapeHtml(data.faire || "(not specified)")}</td></tr>
              <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Email</td><td><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
            </table>
            <h3>Message</h3>
            <p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>
          `,
        },
      },
    },
  });

  return ses.send(command);
}

// Uncomment when ready to send confirmation emails to customers
// export async function sendCustomerConfirmation(data: ContactData) {
//   const command = new SendEmailCommand({
//     Source: FROM_EMAIL,
//     Destination: { ToAddresses: [data.email] },
//     Message: {
//       Subject: {
//         Data: "Thanks for reaching out to Shh It's A Show!",
//       },
//       Body: {
//         Text: {
//           Data: [
//             `Hi ${data.name},`,
//             "",
//             "Thanks for reaching out! We got your message and will get back to you soon.",
//             "",
//             "— Captain Shh-nel & Stu of the Loo",
//             "   Shh It's A Show",
//           ].join("\n"),
//         },
//         Html: {
//           Data: `
//             <p>Hi ${escapeHtml(data.name)},</p>
//             <p>Thanks for reaching out! We got your message and will get back to you soon.</p>
//             <p>
//               — Captain Shh-nel &amp; Stu of the Loo<br>
//               <em>Shh It's A Show</em>
//             </p>
//           `,
//         },
//       },
//     },
//   });
//
//   return ses.send(command);
// }

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
