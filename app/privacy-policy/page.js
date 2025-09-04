import React from "react";

export default function Page() {
  return (
    <div className="w-full mt-12 mx-auto px-6 py-12 text-gray-800 bg-white shadow-lg rounded-2xl">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">
        Privacy Policy
      </h1>

      <p className="mb-6 leading-relaxed text-lg">
        At <span className="font-semibold text-indigo-600">t-racktool.com</span>
        , your privacy is our priority. We are committed to safeguarding the
        personal information you share with us. This Privacy Policy explains in
        detail how we collect, use, and protect your information when you use
        our ticketing tool.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
        1. Information We Collect
      </h2>
      <p className="mb-4 text-base">
        We may collect the following categories of information to provide a
        seamless experience:
      </p>
      <ul className="list-disc list-inside space-y-2 mb-6 text-base">
        <li>
          Personal details such as your name, email address, and phone number.
        </li>
        <li>Account credentials you create during registration.</li>
        <li>
          Technical data such as your IP address, browser type, device
          information, and interaction logs.
        </li>
        <li>
          Support-related data including tickets, attachments, messages, and
          communication history.
        </li>
        <li>
          Optional profile details you provide to enhance collaboration within
          the platform.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
        2. How We Use Your Information
      </h2>
      <p className="mb-4 text-base">We use your information to:</p>
      <ul className="list-disc list-inside space-y-2 mb-6 text-base">
        <li>Deliver, maintain, and improve our ticketing services.</li>
        <li>Authenticate your identity and secure your account.</li>
        <li>Provide customer support and respond to inquiries.</li>
        <li>
          Send updates, service announcements, and important notifications.
        </li>
        <li>
          Detect, prevent, and address technical issues or fraudulent use.
        </li>
        <li>Analyze usage patterns to optimize user experience.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
        3. Sharing of Information
      </h2>
      <p className="mb-6 leading-relaxed text-base">
        We never sell or rent your personal information. Your data is shared
        only with trusted third-party service providers (such as hosting and
        analytics partners) strictly for operational purposes. These partners
        are bound by confidentiality and data protection agreements.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
        4. Data Security
      </h2>
      <p className="mb-6 leading-relaxed text-base">
        We implement robust technical and organizational measures—including
        encryption, firewalls, and regular security audits—to ensure your data
        remains protected against unauthorized access, alteration, disclosure,
        or destruction.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
        5. Cookies & Tracking Technologies
      </h2>
      <p className="mb-6 leading-relaxed text-base">
        We use cookies and similar technologies to personalize content, improve
        functionality, and understand how users interact with our platform. You
        may control cookie preferences in your browser settings, but please note
        that disabling cookies may affect certain features.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
        6. Your Rights
      </h2>
      <p className="mb-6 leading-relaxed text-base">
        You have full control over your personal data. You may request to:
      </p>
      <ul className="list-disc list-inside space-y-2 mb-6 text-base">
        <li>Access a copy of the data we hold about you.</li>
        <li>Update or correct inaccurate information.</li>
        <li>Request deletion of your account and associated data.</li>
        <li>Restrict or object to specific processing activities.</li>
        <li>Export your data in a portable format.</li>
      </ul>
      <p className="mb-6 text-base">
        To exercise these rights, contact us at
        <span className="font-semibold text-indigo-600">
          support@t-racktool.com
        </span>
        .
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
        7. Data Retention
      </h2>
      <p className="mb-6 leading-relaxed text-base">
        We retain personal data only for as long as necessary to fulfill the
        purposes outlined in this policy or comply with legal obligations. After
        this period, data will be securely deleted or anonymized.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
        8. Changes to This Policy
      </h2>
      <p className="mb-6 leading-relaxed text-base">
        We may update this Privacy Policy periodically to reflect changes in our
        practices or for other operational, legal, or regulatory reasons. Any
        updates will be posted on this page, with the revised date clearly
        indicated at the top.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
        9. Contact Us
      </h2>
      <p className="leading-relaxed text-base">
        If you have any questions, concerns, or requests related to this Privacy
        Policy, please reach out to us at:
        <br />
        <span className="font-semibold text-indigo-600">
          support@t-racktool.com
        </span>
      </p>
    </div>
  );
}
