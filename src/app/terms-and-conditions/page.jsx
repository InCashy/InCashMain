import React from 'react'

export const metadata = {
  title: "Terms and Conditions",
  description: "Read InCashy’s Terms and Conditions to understand your rights, responsibilities, and the rules for using our trucking factoring platform.",
  alternates: {
    canonical: "https://www.incashy.com/terms-and-conditions",
  },
};
const termsAndConditions = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="text-sm text-gray-500 mb-6">Last updated: July 19, 2025</p>
      <p className="mb-4">Please read these terms and conditions carefully before using Our Service.</p>
      <h2 className="text-xl font-semibold mb-2">Interpretation and Definitions</h2>
      <p className="mb-4"><strong>Interpretation</strong> – The words with capital letters have specific meanings...</p>

      <h3 className="text-lg font-semibold mt-4 mb-2">Definitions</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Affiliate</strong>: an entity that controls...</li>
        <li><strong>Country</strong>: California, United States</li>
        <li><strong>Company</strong>: In Cashy</li>
        <li><strong>Device</strong>: any device that can access the Service</li>
        <li><strong>Service</strong>: the Website</li>
        <li><strong>Terms and Conditions</strong>: this agreement</li>
        <li><strong>Third-party Social Media Service</strong>: external content/services</li>
        <li><strong>Website</strong>: https://www.incashy.com</li>
        <li><strong>You</strong>: the user</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Acknowledgment</h2>
      <p className="mb-4">These are the Terms and Conditions governing the use of this Service...</p>

      {/* Repeat this structure for the remaining sections. For example: */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Links to Other Websites</h2>
      <p className="mb-4">Our Service may contain links to third-party websites...</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Termination</h2>
      <p className="mb-4">We may terminate or suspend Your access immediately...</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Limitation of Liability</h2>
      <p className="mb-4">To the maximum extent permitted by applicable law...</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">"AS IS" and "AS AVAILABLE" Disclaimer</h2>
      <p className="mb-4">The Service is provided to You "AS IS" and "AS AVAILABLE"... </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Governing Law</h2>
      <p className="mb-4">The laws of the Country shall govern this Terms...</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="mb-2">If you have any questions:</p>
      <ul className="list-disc pl-6">
        <li>Email: angeldomlu@gmail.com</li>
        <li>Website: <a href="https://www.incashy.com/contact" className="text-blue-500 underline">www.incashy.com/contact</a></li>
      </ul>
    </div>
  )
}

export default termsAndConditions