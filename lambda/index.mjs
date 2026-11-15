import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";

const sns = new SNSClient({});
const allowedOrigin = process.env.ALLOWED_ORIGIN;

function response(statusCode, body) {
  return {
    statusCode,
    headers: {
      "content-type": "application/json",
      "access-control-allow-origin": allowedOrigin,
      "access-control-allow-headers": "content-type",
      "access-control-allow-methods": "POST,OPTIONS",
      "vary": "origin",
    },
    body: JSON.stringify(body),
  };
}

export const handler = async (event) => {
  const origin = event.headers?.origin ?? event.headers?.Origin;
  if (origin !== allowedOrigin) return response(403, { message: "Forbidden" });

  let data;
  try {
    data = JSON.parse(event.body ?? "{}");
  } catch {
    return response(400, { message: "Invalid request" });
  }

  if (typeof data.website === "string" && data.website.trim()) {
    return response(200, { message: "Enquiry received" });
  }

  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const phone = typeof data.phone === "string" ? data.phone.trim() : "";
  const interest = typeof data.interest === "string" ? data.interest.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || name.length > 120 || !validEmail || email.length > 254 ||
      phone.length > 40 || interest.length > 120 || !message || message.length > 5000) {
    return response(400, { message: "Please check the enquiry details" });
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    `Interested in: ${interest || "Not specified"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  await sns.send(new PublishCommand({
    TopicArn: process.env.CONTACT_TOPIC_ARN,
    Subject: `Website enquiry from ${name.replace(/[\r\n]+/g, " ").slice(0, 75)}`,
    Message: text,
  }));

  return response(200, { message: "Enquiry sent" });
};