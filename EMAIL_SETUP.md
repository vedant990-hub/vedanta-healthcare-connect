# EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS to make your contact form functional so that messages are sent to your email address.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down the **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to "Email Templates" in your EmailJS dashboard
2. Click "Create New Template"
3. Use this template content:

```html
Subject: New Contact Form Message from {{name}}

You have received a new message from your website contact form.

Name: {{name}}  
Phone: {{phone}}  
Email: {{email}}  
Message:  
{{message}}
```

4. Save the template and note down the **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys" in your EmailJS dashboard
2. Copy your **Public Key**

## Step 5: Update Configuration

1. Open `src/config/emailjs.ts` in your project
2. Replace the placeholder values with your actual credentials:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id_here',
  TEMPLATE_ID: 'your_template_id_here', 
  PUBLIC_KEY: 'your_public_key_here',
  TO_EMAIL: 'your-email@example.com' // Your email address
};
```

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Go to the Contact page
3. Fill out the form and submit
4. Check your email for the message

## Troubleshooting

### Common Issues:

1. **"Service not found" error**: Make sure your Service ID is correct
2. **"Template not found" error**: Verify your Template ID
3. **"Invalid public key" error**: Check your Public Key
4. **Emails not received**: Check your spam folder and email service settings

### Security Notes:

- The public key is safe to expose in client-side code
- Never share your private keys or service credentials
- Consider using environment variables for production

## Environment Variables (Optional)

For better security in production, you can use environment variables:

1. Create a `.env` file in your project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_TO_EMAIL=your-email@example.com
```

2. Update `src/config/emailjs.ts`:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_EMAILJS_SERVICE_ID',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_EMAILJS_TEMPLATE_ID', 
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_EMAILJS_PUBLIC_KEY',
  TO_EMAIL: import.meta.env.VITE_TO_EMAIL || 'your-email@example.com'
};
```

## Support

If you encounter any issues:
1. Check the EmailJS documentation: https://www.emailjs.com/docs/
2. Verify your credentials are correct
3. Check the browser console for error messages
4. Ensure your email service is properly configured

## Free Plan Limitations

EmailJS free plan includes:
- 200 emails per month
- Basic email templates
- Standard support

For higher volume or advanced features, consider upgrading to a paid plan. 