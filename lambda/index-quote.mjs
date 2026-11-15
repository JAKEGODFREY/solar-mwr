const AWS = require("aws-sdk");
var sns = new AWS.SNS();

exports.handler = async (event) => {
  const data = JSON.parse(event.body);
  const topicArn = process.env.TOPIC_ARN;

  console.log("Quote submitted: " + JSON.stringify(data));

  var response;

  try {
    const name = typeof data.name === "string" ? data.name.trim() : "";
    const email = typeof data.email === "string" ? data.email.trim() : "";
    const phone = typeof data.phone === "string" ? data.phone.trim() : "";
    const interest =
      typeof data.interest === "string" ? data.interest.trim() : "";
    const message = typeof data.message === "string" ? data.message.trim() : "";
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    var message = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Interested in: ${interest || "Not specified"}`,
      "",
      "Message:",
      message,
    ].join("\n");

    var subject = `MWR Quote for: ${name}`;

    var params = {
      Message: message,
      Subject: subject,
      TopicArn: topicArn,
    };

    const snsResponse = await sns.publish(params).promise();

    response = {
      statusCode: 200,
      body: JSON.stringify(`Successfully sent SMS: ${topicArn}`),
      messageId: snsResponse.messageId,
      result: "Success",
    };
  } catch (e) {
    console.log(e);
    response = {
      statusCode: 500,
      body: JSON.stringify("Failed to send message"),
      result: "Error",
    };
  }

  return response;
};
