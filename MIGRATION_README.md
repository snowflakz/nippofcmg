# Nippon Site cPanel Migration Guide

This README provides essential information for migrating the Nippon Next.js website to a cPanel hosting environment.

## Files Included

- **CPANEL_MIGRATION.md** - Detailed step-by-step migration guide
- **.htaccess-template** - Template for the .htaccess file needed on cPanel
- **contact-form-handler.php** - PHP script to handle form submissions on cPanel

## Quick Start Guide

1. Build the static export of your Next.js application:
   ```bash
   npm run build
   ```

2. The static files will be in the `out` directory.

3. Upload the contents of the `out` directory to your cPanel hosting.

4. Upload the `.htaccess-template` file to your cPanel hosting directory (rename it to `.htaccess`).

5. Upload the `contact-form-handler.php` file to your cPanel hosting directory.

6. Update your site's forms to point to the PHP handler instead of the Next.js API routes.

## Handling API Routes

Since static exports don't support server-side API routes, we've provided two options:

1. **Form Processing Services** - Use third-party services like Formspree
2. **PHP Handler** - Use the included PHP script to process form submissions

For detailed instructions, see the [CPANEL_MIGRATION.md](./CPANEL_MIGRATION.md) file.

## Important Notes

- Make sure to update your cPanel email settings and PHP handler email address.
- Test all forms after migration to ensure they're sending correctly.
- Configure 404 error pages in cPanel to use your custom 404 page.
- Regularly back up your website files after migration.

## Support

If you encounter issues during migration, refer to the detailed guide or contact your hosting provider's support team for assistance. 