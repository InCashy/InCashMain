import React from 'react'

export const metadata = {
    title: "Privacy Policy",
    description: "Read In Cashy’s Privacy Policy to understand your rights, responsibilities, and the rules governing the use of our trucking factoring platform.",
};
const termsAndConditions = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-gray-800">
    <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
    <p className="text-sm text-gray-500 mb-8">Last updated: July 19, 2025</p>

    <p className="mb-6">
      This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your
      information when You use the Service and tells You about Your privacy rights and how the law protects You.
    </p>

    <p className="mb-6">
      We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection
      and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the
      help of the{" "}
      <a
        href="https://www.termsfeed.com/privacy-policy-generator/"
        className="text-blue-600 underline"
        target="_blank"
      >
        Privacy Policy Generator
      </a>
      .
    </p>

    <h2 className="text-2xl font-semibold mt-10 mb-4">Interpretation and Definitions</h2>

    <h3 className="text-xl font-semibold mt-6 mb-2">Interpretation</h3>
    <p className="mb-6">
      The words of which the initial letter is capitalized have meanings defined under the following conditions. The
      following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
    </p>

    <h3 className="text-xl font-semibold mt-6 mb-2">Definitions</h3>
    <p className="mb-4">For the purposes of this Privacy Policy:</p>
    <ul className="list-disc list-inside space-y-2 mb-6">
      <li>
        <strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.
      </li>
      <li>
        <strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a
        party, where "control" means ownership of 50% or more of the shares, equity interest or other securities.
      </li>
      <li>
        <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our") refers to In Cashy.
      </li>
      <li>
        <strong>Privacy</strong> are small files placed on Your device by a website, containing details of Your
        browsing history among its many uses.
      </li>
      <li>
        <strong>Country</strong> refers to: California, United States.
      </li>
      <li>
        <strong>Device</strong> means any device that can access the Service such as a computer, cellphone or tablet.
      </li>
      <li>
        <strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.
      </li>
      <li>
        <strong>Service</strong> refers to the Website.
      </li>
      <li>
        <strong>Service Provider</strong> means any person who processes data on behalf of the Company.
      </li>
      <li>
        <strong>Usage Data</strong> refers to data collected automatically through the use of the Service.
      </li>
      <li>
        <strong>Website</strong> refers to In Cashy, accessible from{" "}
        <a href="https://www.incashy.com" className="text-blue-600 underline" target="_blank">
          https://www.incashy.com
        </a>
      </li>
      <li>
        <strong>You</strong> means the individual accessing or using the Service, or the company on behalf of which
        such individual is using the Service.
      </li>
    </ul>

    {/* Repeat this structure for the remaining sections:
      - Collecting and Using Your Personal Data
      - Use of Your Personal Data
      - Retention
      - Transfer
      - Deletion
      - Disclosure
      - Security
      - Children’s Privacy
      - External Links
      - Changes to this Policy
      - Contact
  */}

    <p className="text-gray-600 mt-10 text-sm">
      If you have any questions about this Privacy Policy, You can contact us:
    </p>

    <ul className="list-disc list-inside text-gray-600 mt-2">
      <li>Email: <a href="mailto:angeldomlu@gmail.com" className="text-blue-600 underline">angeldomlu@gmail.com</a></li>
      <li>Contact page: <a href="https://incashy.com/contact" className="text-blue-600 underline">https://incashy.com/contact</a></li>
    </ul>
  </div>
  )
}

export default termsAndConditions