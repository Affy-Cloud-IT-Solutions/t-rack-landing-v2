import React from "react";

export default function Page() {
  return (
    <div className="w-full mt-12 mx-auto px-6 py-12 text-gray-800 bg-white shadow-lg rounded-2xl">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">
        Terms & Conditions
      </h1>

      <p className="mb-6 leading-relaxed text-lg">
        Welcome to{" "}
        <span className="font-semibold text-indigo-600">t-racktool.com</span>.
        By accessing or using our ticketing platform, you agree to comply with
        and be bound by the following Terms and Conditions. Please read them
        carefully before using our services.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
        1. Acceptance of Terms
      </h2>
      <p className="mb-6 text-base">
        By creating an account or using our services, you agree to these Terms
        and Conditions, as well as our Privacy Policy. If you do not agree, you
        must discontinue use immediately.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
        2. Eligibility
      </h2>
      <p className="mb-6 text-base">
        You must be at least 18 years old or the legal age of majority in your
        jurisdiction to use this platform. By using our services, you represent
        that you meet these requirements.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
        3. Account Responsibilities
      </h2>
      <ul className="list-disc list-inside space-y-2 mb-6 text-base">
        <li>
          You are responsible for maintaining the confidentiality of your
          account credentials.
        </li>
        <li>You agree to provide accurate and up-to-date information.</li>
        <li>
          You are fully responsible for all activities under your account.
        </li>
        <li>You must notify us immediately of any unauthorized use.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
        4. Acceptable Use
      </h2>
      <p className="mb-4 text-base">You agree not to:</p>
      <ul className="list-disc list-inside space-y-2 mb-6 text-base">
        <li>Use the platform for illegal, harmful, or abusive purposes.</li>
        <li>Upload malicious code, spam, or unauthorized content.</li>
        <li>Violate intellectual property or data protection rights.</li>
        <li>Attempt to disrupt or gain unauthorized access to our systems.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
        5. Service Availability
      </h2>
      <p className="mb-6 text-base">
        We strive to ensure uninterrupted access to our services but cannot
        guarantee that the platform will always be available, secure, or free
        from errors. We may suspend or modify services for maintenance or
        updates without prior notice.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
        6. Intellectual Property
      </h2>
      <p className="mb-6 text-base">
        All content, trademarks, and software provided through
        <span className="font-semibold text-indigo-600"> t-racktool.com</span>
        remain the property of their respective owners. You are granted a
        limited, non-transferable license to use the platform in accordance with
        these Terms.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
        7. Limitation of Liability
      </h2>
      <p className="mb-6 text-base">
        To the maximum extent permitted by law, we are not liable for any
        direct, indirect, incidental, or consequential damages arising from your
        use of the platform, including but not limited to data loss, service
        interruptions, or unauthorized access.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
        8. Termination
      </h2>
      <p className="mb-6 text-base">
        We reserve the right to suspend or terminate your account if you violate
        these Terms, misuse our services, or engage in unlawful activity.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
        9. Changes to These Terms
      </h2>
      <p className="mb-6 text-base">
        We may update these Terms and Conditions at any time. Any changes will
        be posted on this page with the revised date. Continued use of our
        services constitutes acceptance of the updated Terms.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
        10. Governing Law
      </h2>
      <p className="mb-6 text-base">
        These Terms are governed by and construed in accordance with the laws of
        your jurisdiction, without regard to its conflict of law provisions.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
        11. Contact Us
      </h2>
      <p className="leading-relaxed text-base">
        For any questions about these Terms and Conditions, please contact us
        at:
        <br />
        <span className="font-semibold text-indigo-600">
          support@t-racktool.com
        </span>
      </p>
    </div>
  );
}
