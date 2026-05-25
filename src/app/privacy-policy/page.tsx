import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — TypingScoreTest',
  description: 'Read the privacy policy for TypingScoreTest.com. Learn how we collect, use, and protect your data, including our use of Google AdSense and cookies.',
  alternates: { canonical: 'https://typingscoretest.com/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last Updated: May 25, 2026</p>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          <p>
            At TypingScoreTest.com (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), we are committed to protecting your privacy and being 
            transparent about how we collect, use, and safeguard your information. This Privacy Policy explains our 
            data practices when you visit our website at <Link href="/" className="text-primary-600 hover:underline">typingscoretest.com</Link>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Information We Collect</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1.1 Information You Provide</h3>
          <p>
            Our typing test tool does not require registration or personal information to use. You can take typing 
            tests and access all features without providing any personal data. If you contact us via email, we will 
            collect the information you voluntarily provide, such as your name and email address.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1.2 Automatically Collected Information</h3>
          <p>When you visit our website, we may automatically collect certain information, including:</p>
          <ul className="space-y-2">
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>IP address (anonymized)</li>
            <li>Pages visited and time spent on each page</li>
            <li>Referring website</li>
            <li>Device type (desktop, mobile, tablet)</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar technologies to enhance your browsing experience. Cookies are small text 
            files stored on your device that help us understand how you use our website.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.1 Types of Cookies We Use</h3>
          <ul className="space-y-3">
            <li>
              <strong>Essential Cookies:</strong> Required for the website to function properly. These cookies enable 
              core functionality such as remembering your cookie consent preferences.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting 
              and reporting information anonymously. We may use Google Analytics for this purpose.
            </li>
            <li>
              <strong>Advertising Cookies:</strong> Used by Google AdSense and its partners to serve relevant 
              advertisements. These cookies may track your browsing activity across websites to deliver personalized ads.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Google AdSense and Advertising</h2>
          <p>
            We use Google AdSense to display advertisements on our website. Google AdSense is a third-party 
            advertising service provided by Google LLC. Here is important information about how advertising works 
            on our site:
          </p>
          <ul className="space-y-3">
            <li>
              <strong>Third-Party Cookies:</strong> Google and its advertising partners may use cookies to serve ads 
              based on your prior visits to our website or other websites on the Internet.
            </li>
            <li>
              <strong>Personalized Advertising:</strong> Google&apos;s use of advertising cookies enables it and its 
              partners to serve ads to you based on your browsing history. You can opt out of personalized advertising 
              by visiting <a href="https://www.google.com/settings/ads" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.
            </li>
            <li>
              <strong>DoubleClick Cookie:</strong> Google uses the DoubleClick cookie to serve more relevant ads 
              across the web and to limit the number of times a given ad is shown to you.
            </li>
            <li>
              <strong>Third-Party Vendors:</strong> Third-party vendors, including Google, use cookies to serve ads 
              based on your visits to this and other websites. You may opt out of third-party vendor cookies by 
              visiting the <a href="https://optout.networkadvertising.org/" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">Network Advertising Initiative opt-out page</a>.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul className="space-y-2">
            <li>To provide and maintain our typing test service</li>
            <li>To improve our website and user experience</li>
            <li>To analyze usage trends and optimize content</li>
            <li>To display relevant advertisements through Google AdSense</li>
            <li>To respond to your inquiries or support requests</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Data Sharing and Disclosure</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties 
            except as described in this policy. We may share anonymized, aggregated data with:
          </p>
          <ul className="space-y-2">
            <li><strong>Google AdSense:</strong> For advertising purposes as described in Section 3</li>
            <li><strong>Analytics Providers:</strong> To help us understand website usage patterns</li>
            <li><strong>Legal Requirements:</strong> If required by law or to protect our rights</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Your Rights and Choices</h2>
          <p>You have the following rights regarding your data:</p>
          <ul className="space-y-2">
            <li><strong>Cookie Management:</strong> You can control cookies through your browser settings and our cookie consent banner</li>
            <li><strong>Ad Personalization:</strong> Opt out via Google Ads Settings or the NAI opt-out page</li>
            <li><strong>Data Access:</strong> Request information about data we hold about you</li>
            <li><strong>Data Deletion:</strong> Request deletion of your data by contacting us</li>
            <li><strong>Do Not Track:</strong> We respect Do Not Track browser signals</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your information against 
            unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
            the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. Children&apos;s Privacy</h2>
          <p>
            Our website is not directed to children under the age of 13. We do not knowingly collect personal 
            information from children. If you believe a child has provided us with personal data, please contact 
            us so we can take appropriate action.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an 
            updated &quot;Last Updated&quot; date. We encourage you to review this policy periodically.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">10. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our data practices, please contact us at:
          </p>
          <ul className="space-y-2">
            <li><strong>Email:</strong> contact@typingscoretest.com</li>
            <li><strong>Website:</strong> <Link href="/" className="text-primary-600 hover:underline">typingscoretest.com</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
