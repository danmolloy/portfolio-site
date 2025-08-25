# SendGrid to Amazon SES Migration

This project has been migrated from SendGrid to Amazon SES for email functionality.

## Changes Made

1. **Removed SendGrid dependencies:**
   - `@sendgrid/mail` package removed
   - SendGrid API calls replaced with AWS SES

2. **Added AWS SES dependencies:**
   - `@aws-sdk/client-ses` package added
   - Created utility functions in `lib/ses.ts`

3. **Updated API route:**
   - `app/api/route.ts` now uses Amazon SES instead of SendGrid
   - Simplified email sending logic with reusable utility functions

## Environment Variables Required

Replace your SendGrid environment variables with these AWS SES variables:

```env
# Remove these SendGrid variables:
# SENDGRID_API_KEY=your_sendgrid_api_key

# Add these AWS SES variables:
AWS_ACCESS_KEY_ID=your_aws_access_key_id
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
AWS_REGION=us-east-1  # or your preferred AWS region

# Keep these existing variables:
FROM_EMAIL=your_verified_ses_email@domain.com
TO_EMAIL=recipient@domain.com
```

## AWS SES Setup Requirements

1. **Verify your email addresses** in AWS SES console
2. **Create an IAM user** with SES permissions
3. **Get out of sandbox mode** (if needed for production)
4. **Configure your domain** (recommended for production)

### IAM Policy Example

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ses:SendEmail",
        "ses:SendRawEmail"
      ],
      "Resource": "*"
    }
  ]
}
```

## Testing

The contact form functionality remains the same from the frontend perspective. The API endpoint `/api` will now send emails through Amazon SES instead of SendGrid.

## Benefits of Amazon SES

- **Cost-effective**: Generally cheaper than SendGrid for high volume
- **AWS integration**: Better integration with other AWS services
- **Scalability**: Handles high email volumes efficiently
- **Reliability**: High deliverability rates

## Migration Notes

- The email template functionality has been replaced with inline HTML/text generation
- Error handling remains the same
- Response format is slightly different (returns `messageId` instead of SendGrid response) 