// File: app/refund-cancellation-policy/page.tsx

import { RefreshCw, XCircle, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function RefundCancellationPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 mt-[250px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">Refund & Cancellation Policy</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
              <RefreshCw className="w-10 h-10 text-white" />
            </div>
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
              <XCircle className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Refund & Cancellation Policy</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We strive for your complete satisfaction. Review our comprehensive refund and cancellation policy for all services and products offered by PAYZONINDIA.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last Updated: December 2025</p>
        </div>

        <div className="space-y-8">
          {/* CANCELLATION POLICIES */}
          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-3xl p-8 border-2 border-red-200">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-8 h-8 text-red-600" />
              <h2 className="text-3xl font-bold text-gray-900">Cancellation Policies</h2>
            </div>

            <div className="space-y-6">
              {/* Service Cancellations */}
              <section className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3 text-red-600 font-bold">1</span>
                  Service Cancellations
                </h3>
                <div className="ml-11 space-y-4 text-gray-700">
                  <div>
                    <p className="font-semibold text-gray-900">IT Services & Cyber Security:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                      <li>Cancellation possible before project initiation with full refund</li>
                      <li>After initiation, cancellation subject to work completed billing</li>
                      <li>Minimum 48-hour notice required for scheduled maintenance or consultations</li>
                      <li>Ongoing subscription services require 30-day cancellation notice</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900">Digital Marketing Services:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                      <li>Campaign cancellations accepted before launch with full refund</li>
                      <li>Running campaigns can be cancelled with pro-rata billing</li>
                      <li>Monthly retainer agreements require 30-day notice for cancellation</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">Skills Development Programs:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                      <li>Free cancellation up to 14 days before program start</li>
                      <li>50% fee applicable for cancellations 7-13 days before start</li>
                      <li>No refund for cancellations less than 7 days before start</li>
                      <li>Transfer to future sessions available with 50% transfer fee</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">Finance Audit Services:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                      <li>Cancellation before audit commencement: full refund</li>
                      <li>Cancellation after commencement: billed for work completed</li>
                      <li>Rescheduling available once without penalty</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Product Order Cancellations */}
              <section className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3 text-red-600 font-bold">2</span>
                  Product Order Cancellations
                </h3>
                <div className="ml-11 space-y-4 text-gray-700">
                  <div>
                    <p className="font-semibold text-gray-900">Before Shipping:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                      <li>Orders can be cancelled free of charge before shipment</li>
                      <li>Cancellation requests must be made within 24 hours of order placement</li>
                      <li>Full refund processed within 5-7 business days</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900">After Shipping:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                      <li>Orders cannot be cancelled once shipped</li>
                      <li>Follow our Refund Policy for shipped items (see below)</li>
                      <li>Refuse delivery if you no longer want the item (refund minus shipping costs)</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">Custom/Personalized Products:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                      <li>Cancellation only possible within 2 hours of order placement</li>
                      <li>Once production begins, orders cannot be cancelled</li>
                      <li>Non-refundable once manufacturing/customization is initiated</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Investor & Social Welfare Cancellations */}
              <section className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3 text-red-600 font-bold">3</span>
                  Investor Program & Social Welfare Cancellations
                </h3>
                <div className="ml-11 space-y-4 text-gray-700">
                  <div>
                    <p className="font-semibold text-gray-900">Investor Programs:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                      <li>Investment commitments can be withdrawn before finalization</li>
                      <li>Cancellation must be submitted in writing via email</li>
                      <li>Processing fees (if any) are non-refundable</li>
                      <li>Consultation fees paid are not refundable after services rendered</li>
                      <li>No penalties for cancellation before investment execution</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900">Social Welfare Programs:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                      <li>Donations are non-refundable and non-cancellable</li>
                      <li>Program enrollments can be cancelled before program start</li>
                      <li>Volunteer commitments should provide 7-day notice for cancellation</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">Divine Industries:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                      <li>Standard product cancellation terms apply</li>
                      <li>Custom religious items follow custom product cancellation policy</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Cancellation Process */}
              <section className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3 text-red-600 font-bold">4</span>
                  How to Cancel
                </h3>
                <div className="ml-11 space-y-4 text-gray-700">
                  <p>To cancel an order or service:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Email us at <a href="mailto:info@payzonindia.com" className="text-blue-600 hover:underline">info@payzonindia.com</a> with your order/service ID</li>
                    <li>Call our customer support at <a href="tel:+917554859540" className="text-blue-600 hover:underline">+91 755 485 9540</a></li>
                    <li>Provide cancellation reason (optional but helps us improve)</li>
                    <li>Wait for cancellation confirmation via email</li>
                    <li>Refunds (if applicable) processed according to refund timelines below</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>

          {/* REFUND POLICIES */}
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-3xl p-8 border-2 border-green-200">
            <div className="flex items-center gap-3 mb-6">
              <RefreshCw className="w-8 h-8 text-green-600" />
              <h2 className="text-3xl font-bold text-gray-900">Refund Policies</h2>
            </div>

            <div className="space-y-6">
              {/* Service-Based Refunds */}
              <section className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 text-green-600 font-bold">1</span>
                  Service-Based Refunds
                </h3>
                <div className="ml-11 space-y-4 text-gray-700">
                  <div>
                    <p className="font-semibold text-gray-900">IT Services, Cyber Security, Digital Marketing:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                      <li>Refunds available within 7 days of service initiation if deliverables have not commenced</li>
                      <li>Partial refunds may be issued based on work completed</li>
                      <li>Custom project refunds are evaluated on a case-by-case basis</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900">Skills Development Programs:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                      <li>Full refund available if cancellation is made 14 days before program start date</li>
                      <li>50% refund if cancelled 7-13 days before start date</li>
                      <li>No refund for cancellations made less than 7 days before start date</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">Finance Audit & Investor Programs:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                      <li>Consultation fees are non-refundable once services have been rendered</li>
                      <li>Audit services can be refunded if cancelled before initiation</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Product-Based Refunds */}
              <section className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 text-green-600 font-bold">2</span>
                  Product-Based Refunds
                </h3>
                <div className="ml-11 space-y-4 text-gray-700">
                  <div>
                    <p className="font-semibold text-gray-900">Physical Products (Toys, Artificial Jewellery, Clothing, Electronics):</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                      <li>Full refund available within 14 days of delivery for unused, unopened items</li>
                      <li>Items must be returned in original packaging with all tags intact</li>
                      <li>Electronics require original packaging and accessories for refund eligibility</li>
                      <li>Defective items can be returned within 30 days for full refund or replacement</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900">Organic Products (Spices, Vegetables, Farming Products):</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                      <li>Refund available within 7 days of delivery for quality issues</li>
                      <li>Perishable items must be reported within 24 hours of delivery</li>
                      <li>Photo evidence of damaged or substandard products required</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">Divine Industries Products:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                      <li>Refunds available within 14 days for unused items</li>
                      <li>Damaged items eligible for full refund with photo documentation</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Refund Process */}
              <section className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 text-green-600 font-bold">3</span>
                  Refund Process & Timeline
                </h3>
                <div className="ml-11 space-y-4 text-gray-700">
                  <p>To initiate a refund:</p>
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li>Contact our customer support with your order/service ID</li>
                    <li>Provide reason for refund request and supporting documentation</li>
                    <li>Our team will review within 2-3 business days</li>
                    <li>Approved refunds will be processed within 7-10 business days</li>
                    <li>Refunds will be credited to the original payment method</li>
                  </ol>
                  <p className="mt-4 font-semibold text-gray-900">Note: Bank processing times may vary and can take an additional 3-5 business days.</p>
                </div>
              </section>

              {/* Non-Refundable Items */}
              <section className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 text-green-600 font-bold">4</span>
                  Non-Refundable Items & Services
                </h3>
                <div className="ml-11 space-y-4 text-gray-700">
                  <p>The following are not eligible for refunds:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Customized or personalized products</li>
                    <li>Downloaded digital content or software</li>
                    <li>Services that have been fully rendered</li>
                    <li>Perishable goods beyond the return window</li>
                    <li>Social Welfare program donations</li>
                    <li>Products showing signs of use or wear</li>
                    <li>Items without original packaging and tags</li>
                  </ul>
                </div>
              </section>

              {/* Shipping Costs */}
              <section className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 text-green-600 font-bold">5</span>
                  Return Shipping Costs
                </h3>
                <div className="ml-11 space-y-4 text-gray-700">
                  <p>Return shipping costs are the responsibility of the customer unless:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>The return is due to our error (wrong item sent, incorrect product)</li>
                    <li>The product is defective or damaged upon arrival</li>
                    <li>The product does not match the description on our website</li>
                  </ul>
                  <p className="mt-4">In these cases, we will provide a prepaid shipping label. Please contact customer support before returning any items.</p>
                </div>
              </section>
            </div>
          </div>

          {/* ADDITIONAL IMPORTANT INFORMATION */}
          <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 text-blue-600 font-bold">!</span>
              Force Majeure & Important Notes
            </h2>
            <div className="ml-11 space-y-4 text-gray-700">
              <div>
                <p className="font-semibold text-gray-900">Force Majeure:</p>
                <p className="mt-2">PAYZONINDIA reserves the right to cancel or reschedule services due to circumstances beyond our control, including natural disasters, government regulations, pandemics, or technical failures. In such cases, customers will be offered:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Full refund of any advance payments</li>
                  <li>Rescheduling to a mutually agreed date</li>
                  <li>Credit toward future services</li>
                </ul>
              </div>

              <div className="mt-6">
                <p className="font-semibold text-gray-900">Important Notes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>Cancellation and refund policies may vary based on promotional offers or special agreements</li>
                  <li>All cancellations and refunds are subject to verification and approval</li>
                  <li>Multiple cancellations may result in account restrictions</li>
                  <li>PAYZONINDIA reserves the right to modify this policy with prior notice</li>
                  <li>For specific queries, please contact our customer support team</li>
                  <li>Refund timelines exclude weekends and public holidays</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Need Help with Refunds or Cancellations?</h3>
          <p className="mb-6 text-blue-100">
            Our customer support team is here to assist you with any questions about refunds or cancellations.
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