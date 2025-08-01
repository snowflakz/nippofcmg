"use client"

import { motion } from "framer-motion"

export default function CookiesPolicyClient() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">Cookies Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide useful information to website owners.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Essential cookies: Required for the website to function properly</li>
              <li>Analytics cookies: Help us understand how visitors interact with our website</li>
              <li>Preference cookies: Remember your settings and preferences</li>
              <li>Marketing cookies: Used to track visitors across websites for marketing purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Types of Cookies We Use</h2>
            <h3 className="text-xl font-bold mb-2">3.1 Essential Cookies</h3>
            <p>These cookies are necessary for the website to function and cannot be switched off in our systems. They include:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Session management</li>
              <li>Security features</li>
              <li>Basic website functionality</li>
            </ul>

            <h3 className="text-xl font-bold mb-2">3.2 Analytics Cookies</h3>
            <p>These cookies help us understand how visitors interact with our website:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Page views and navigation</li>
              <li>Time spent on pages</li>
              <li>Error tracking</li>
            </ul>

            <h3 className="text-xl font-bold mb-2">3.3 Preference Cookies</h3>
            <p>These cookies remember your settings and preferences:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Language preferences</li>
              <li>Cookie consent status</li>
              <li>Customized content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Managing Cookies</h2>
            <p>
              You can control and manage cookies in your browser settings. However, please note that disabling certain cookies may affect the functionality of our website.
            </p>
            <p className="mt-4">
              To manage cookies in your browser:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Chrome: Settings → Privacy and security → Cookies and other site data</li>
              <li>Firefox: Options → Privacy & Security → Cookies and Site Data</li>
              <li>Safari: Preferences → Privacy → Cookies and website data</li>
              <li>Edge: Settings → Cookies and site permissions → Cookies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Third-Party Cookies</h2>
            <p>
              Some cookies are placed by third-party services that appear on our pages. We use these services to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Analyze website traffic</li>
              <li>Provide social media features</li>
              <li>Deliver targeted advertising</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Updates to This Policy</h2>
            <p>
              We may update this Cookies Policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please contact us at:
            </p>
            <p className="mt-2">
              Email: enquiries@nipponnig.com<br />
              Phone: +1 (760) 359 2732<br />
              Address: Lagos, Nigeria
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  )
} 