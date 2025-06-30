# Next.js to cPanel Migration Guide

This guide will walk you through the process of migrating your Next.js application to a cPanel hosting account.

## Prerequisites

- Access to your cPanel hosting account
- FTP client (FileZilla, WinSCP, etc.)
- Node.js and npm installed on your local machine
- Your Next.js application code (this repository)

## Step 1: Prepare Your Next.js App for Static Export

We've already updated the `next.config.mjs` file to generate a static export:

```js
output: 'export',
distDir: 'out',
basePath: process.env.NODE_ENV === 'production' ? '/nippon-site' : '',
images: {
  unoptimized: true,
}
```

## Step 2: Handle API Routes for Static Export

Since static exports don't support server-side API routes, we need alternative solutions:

### Option A: Using Form Submission Services

For the contact form and booking functionality, consider using third-party form submission services:

1. [Formspree](https://formspree.io/) - Easy to implement form processing service
2. [Netlify Forms](https://www.netlify.com/products/forms/) - If you decide to use Netlify hosting instead
3. [FormSubmit](https://formsubmit.co/) - No-code form endpoints

Example implementation with Formspree:

```html
<form action="https://formspree.io/f/{your-form-id}" method="POST">
  <!-- Your form fields -->
  <input type="text" name="name">
  <input type="email" name="email">
  <button type="submit">Send</button>
</form>
```

### Option B: Using Serverless Functions

If your hosting provider supports PHP:

1. Create a PHP script to handle form submissions
2. Save it as `contact.php` in your public_html directory
3. Update your form action to point to this PHP script

Example PHP script:

```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  
  $to = "your-email@example.com";
  $subject = "New message from website";
  $body = "Name: $name\nEmail: $email\nMessage: $message";
  $headers = "From: $email";
  
  mail($to, $subject, $body, $headers);
  
  // Redirect back to a thank you page
  header("Location: /thank-you");
  exit();
}
?>
```

## Step 3: Build the Static Export

Run the following commands to build your Next.js application as a static export:

```bash
# Install dependencies (if not already installed)
npm install

# Build the static export
npm run build
```

This will generate a static version of your site in the `out` directory.

## Step 4: Configure cPanel's Public Directory

1. Log in to your cPanel account
2. Navigate to "File Manager"
3. Go to the `public_html` directory (or whatever your hosting provider uses as the web root)
4. Create a subdirectory called `nippon-site` (or whatever you specified in `basePath` in the next.config.mjs file)

## Step 5: Upload Files to cPanel

You have two options for uploading files:

### Option A: Using FTP Client

1. Connect to your hosting server using an FTP client (like FileZilla)
2. Use these credentials:
   - Host: Your cPanel host (usually ftp.yourdomain.com)
   - Username: Your cPanel username
   - Password: Your cPanel password
   - Port: 21 (or as specified by your hosting provider)
3. Navigate to the `public_html/nippon-site` directory on the remote server
4. Upload all contents from your local `out` directory to this remote directory

### Option B: Using cPanel File Manager

1. In cPanel, navigate to File Manager
2. Go to `public_html/nippon-site`
3. Click "Upload" and select all files from your local `out` directory
4. Alternatively, you can create a ZIP file of your `out` directory, upload it, and extract it on the server

## Step 6: Configure .htaccess for SPA Routing

Create an `.htaccess` file in your `public_html/nippon-site` directory with the following content:

```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /nippon-site
  
  # Don't rewrite files or directories
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]
  
  # Rewrite everything else to index.html
  RewriteRule ^ index.html [L]
</IfModule>
```

This handles client-side routing so that all routes redirect properly to your application.

## Step 7: Test Your Website

Visit your website at `https://yourdomain.com/nippon-site` to ensure everything is working correctly.

## Step 8: Set Up 404 Page (Optional)

If you want to use your custom 404 page, you might need to configure your hosting provider's 404 settings to point to your custom 404 page:

1. In cPanel, look for "Error Pages" or a similar option
2. Configure the 404 error page to point to `/nippon-site/404.html`

## Step 9: Set Up as Root Website (Optional)

If you want to serve your Next.js application as the root website (without the `/nippon-site` path):

1. Update `next.config.mjs` to remove the `basePath` setting
2. Rebuild your application
3. Upload the contents of the `out` directory directly to `public_html`
4. Update the `.htaccess` file to use `RewriteBase /` instead of `RewriteBase /nippon-site`

## Troubleshooting

### API Routes Not Working

Remember that with a static export, server-side API routes will not work. You'll need to use external API services or serverless functions for any backend functionality as described in Step 2.

### Images Not Loading

If images are not loading correctly, double-check:
- Paths are correct (especially with the basePath configuration)
- Files were uploaded properly
- Image optimization is disabled in next.config.mjs

### Routing Issues

If routing isn't working correctly:
- Verify the `.htaccess` file is correctly configured
- Check that all pages were built and exported properly
- Ensure all links in your application use relative URLs that account for the basePath

## Regular Updates

When you need to update your website:

1. Make changes to your local code
2. Run `npm run build` to generate a new static export
3. Upload the new files to your cPanel hosting, replacing the old files

For small changes, you can upload only the modified files. For larger changes, it might be easier to delete the existing files on the server and upload the entire new build. 