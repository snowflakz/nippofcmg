# Email Setup Guide for Contact Forms

To enable the contact forms on the Nippon website, you need to set up email credentials in your environment.

## Setting up Gmail for SMTP

1. Create or use an existing Gmail account that will send out form submissions
2. Enable 2-Step Verification for your Gmail account:
   - Go to your Google Account > Security
   - Turn on 2-Step Verification
   
3. Create an App Password:
   - Go to your Google Account > Security
   - Under "Signing in to Google," select "App passwords"
   - Generate a new app password (Select "Mail" as the app and "Other" as the device)
   - Copy the 16-character password that is generated

## Setting up Environment Variables

Create a file named `.env.local` in the root of your project with the following content:

```
# Email configuration for contact forms
EMAIL_USER=your_gmail_address@gmail.com
EMAIL_PASS=your_16_character_app_password
```

Replace `your_gmail_address@gmail.com` with your actual Gmail address and `your_16_character_app_password` with the app password you generated.

## Testing

After setting up the environment variables, restart your Next.js development server. Test your contact forms to ensure that emails are being sent correctly.

## Production Deployment

When deploying to production:

1. Add these environment variables to your hosting platform (Vercel, Netlify, etc.)
2. Make sure the environment variables are securely stored and not committed to your repository

## Troubleshooting

If emails are not being sent:

1. Check if the environment variables are set correctly
2. Verify that the Gmail account and app password are working
3. Check if your hosting platform has properly configured the environment variables
4. Look for error messages in the console logs 