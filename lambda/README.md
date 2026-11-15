# Contact form Lambda and SNS

This AWS SAM stack exposes `POST /contact` through API Gateway HTTP API. The Lambda validates submissions and publishes each enquiry to an Amazon SNS topic. The topic emails every confirmed subscriber.

## Deploy

1. Install the AWS SAM CLI and configure AWS credentials with permission to deploy CloudFormation, API Gateway, Lambda, IAM roles, and SNS.
2. From this repository root run:

   ```powershell
   sam build
   sam deploy --guided
   ```

3. Enter the exact public site origin for `AllowedOrigin` (scheme and host only, no path) and the inbox for `RecipientEmail`.
4. Find the AWS notification email sent to that inbox and confirm the SNS subscription. SNS will not deliver enquiries to an unconfirmed email endpoint.
5. Copy the `ContactApiUrl` stack output into `CONTACT_API_URL` in `src/constants.ts`, then rebuild and publish the site. For local development, use `http://localhost:5173` as `AllowedOrigin`.

SNS email subscriptions deliver notification emails with an SNS-generated format; the email body cannot be customized, and the submitter's address is included in the message rather than set as Reply-To. If you need branded email formatting or direct replies to the enquirer, SES is a better fit. See [SNS email subscriptions](https://docs.aws.amazon.com/sns/latest/dg/sns-email-notifications.html).