// File: app/privacy-policy/page.tsx

import { Shield, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 mt-[250px]">
      {/* Header */}
      {/* <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition">
              <img src="/images/logo.png" alt="PAYZONINDIA" className="w-12 h-12" />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  PAYZONINDIA
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div> */}

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your privacy is important to us. This policy outlines how PAYZONINDIA collects, uses, and protects your personal information.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last Updated: December 2025</p>
        </div>

        <div className="space-y-8">
          <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 text-blue-600 font-bold">1</span>
              Information We Collect
            </h2>
            <div className="ml-11 space-y-4 text-gray-700">
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Personal identification information (Name, email address, phone number)</li>
                <li>Business information for our IT Services, Cyber Security, and Digital Marketing services</li>
                <li>Payment information for transactions related to our services</li>
                <li>Information related to Skills Development programs and training enrollment</li>
                <li>Details for Investor Program applications and Social Welfare initiatives</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 text-green-600 font-bold">2</span>
              How We Use Your Information
            </h2>
            <div className="ml-11 space-y-4 text-gray-700">
              <p>We use the collected information to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide and maintain our services across all sectors</li>
                <li>Process transactions for products (Toys, Artificial Jewellery, Spices & Vegetables, Clothing, Electronics)</li>
                <li>Send you updates about Skills Development programs and training opportunities</li>
                <li>Communicate regarding Finance Audit services and Investor Programs</li>
                <li>Improve our Organic Farming and Divine Industries offerings</li>
                <li>Respond to your inquiries and provide customer support</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3 text-purple-600 font-bold">3</span>
              Data Security
            </h2>
            <div className="ml-11 space-y-4 text-gray-700">
              <p>We implement industry-standard security measures to protect your personal information. Our Cyber Security expertise ensures that your data is handled with the highest level of protection, including encryption, secure servers, and regular security audits.</p>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3 text-orange-600 font-bold">4</span>
              Information Sharing
            </h2>
            <div className="ml-11 space-y-4 text-gray-700">
              <p>We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>With service providers who assist in operating our business</li>
                <li>When required by law or to protect our legal rights</li>
                <li>With your explicit consent</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3 text-red-600 font-bold">5</span>
              Your Rights
            </h2>
            <div className="ml-11 space-y-4 text-gray-700">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access and receive a copy of your personal data</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center mr-3 text-teal-600 font-bold">6</span>
              Cookies and Tracking
            </h2>
            <div className="ml-11 space-y-4 text-gray-700">
              <p>We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings.</p>
            </div>
          </section>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
          <p className="mb-6 text-blue-100">
            If you have any questions about our privacy policy, please contact us.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start space-x-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Email</p>
                <p className="text-sm text-blue-100">info@payzonindia.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Phone</p>
                <p className="text-sm text-blue-100">+91 755 485 9540</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Address</p>
                <p className="text-sm text-blue-100">Bhopal, Madhya Pradesh</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
