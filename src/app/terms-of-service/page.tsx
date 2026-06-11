import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — TypingScoreTest',
  description: 'Read the Terms of Service for TypingScoreTest.com. Understand the rules and guidelines for using our free typing speed test tool.',
  alternates: { canonical: 'https://typingscoretest.com/terms-of-service' },
};

export default function TermsOfServicePage() {
  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-gray-500 mb-8">Last Updated: May 25, 2026</p>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          <p>
            Welcome to TypingScoreTest.com. By accessing and using our website, you agree to be bound by these 
            Terms of Service (&quot;Terms&quot;). Please read them carefully before using our services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using TypingScoreTest.com (&quot;the Service&quot;), you agree to comply with and be bound by 
            these Terms. If you do not agree with any part of these Terms, you must not use our website.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Description of Service</h2>
          <p>
            TypingScoreTest.com provides a free online typing speed test tool that measures your typing speed in 
            words per minute (WPM) and accuracy. We also provide educational content including guides, tips, and 
            resources to help users improve their typing skills. The Service is provided &quot;as is&quot; and &quot;as available.&quot;
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Use of the Service</h2>
          <p>You agree to use our Service only for lawful purposes and in accordance with these Terms. You agree NOT to:</p>
          <ul className="space-y-2">
            <li>Use the Service in any way that violates applicable laws or regulations</li>
            <li>Attempt to interfere with or disrupt the Service or its servers</li>
            <li>Use automated tools, bots, or scripts to access or manipulate the Service</li>
            <li>Attempt to gain unauthorized access to any part of the Service</li>
            <li>Collect or harvest any information from the Service without permission</li>
            <li>Use the Service to transmit any harmful, offensive, or illegal content</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Intellectual Property</h2>
          <p>
            All content on TypingScoreTest.com, including but not limited to text, graphics, logos, icons, images, 
            software, and educational materials, is the property of TypingScoreTest or its content suppliers and is 
            protected by international copyright laws. You may not reproduce, distribute, modify, or create derivative 
            works from our content without explicit written permission.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Accuracy of Results</h2>
          <p>
            While we strive to provide accurate typing speed measurements, results may vary based on factors including 
            your device, browser, internet connection, and input method. Our test results are provided for informational 
            and self-assessment purposes only and should not be considered as certified or official typing speed 
            certifications. We make no warranties regarding the absolute accuracy of test results.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Third-Party Advertising</h2>
          <p>
            Our website displays advertisements served by Google AdSense and potentially other third-party advertising 
            networks. These third parties may use cookies, web beacons, and similar technologies to collect information 
            about your browsing activity. We are not responsible for the privacy practices or content of these 
            third-party advertisers. Please refer to our{' '}
            <Link href="/privacy-policy" className="text-primary-600 hover:underline">Privacy Policy</Link>{' '}
            for more details about our advertising practices.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Disclaimer of Warranties</h2>
          <p>
            THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER 
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
            PARTICULAR PURPOSE, AND NON-INFRINGEMENT. We do not warrant that the Service will be uninterrupted, 
            secure, or error-free.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. Limitation of Liability</h2>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY LAW, TYPINGSCORETEST.COM AND ITS OPERATORS SHALL NOT BE LIABLE FOR 
            ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE 
            SERVICE. Our total liability shall not exceed the amount you paid to use the Service (which is $0 as 
            the Service is free).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. External Links</h2>
          <p>
            Our website may contain links to third-party websites or resources. These links are provided for 
            convenience only, and we are not responsible for the content, accuracy, or practices of any third-party 
            sites. Inclusion of any link does not imply endorsement by TypingScoreTest.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">10. Modifications to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes will be posted on this page with an 
            updated effective date. Your continued use of the Service after changes constitutes acceptance of the 
            new Terms. We encourage you to review these Terms periodically.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">11. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with applicable laws, without regard to 
            conflict of law provisions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">12. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <ul className="space-y-2">
            <li><strong>Email:</strong> purvenconsulting@gmail.com</li>
            <li><strong>Website:</strong> <Link href="/" className="text-primary-600 hover:underline">typingscoretest.com</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
