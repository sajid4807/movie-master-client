// import { Link } from "lucide-react";
import { Link } from "react-router";

export default function PrivacyPolicy() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-black py-8 md:py-16 text-white">
      <div className="max-w-4xl mx-auto bg-slate-800 rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-cyan-400 mb-6">Privacy Policy</h1>

        <p className="text-gray-300 mb-4">
          At <span className="font-semibold text-cyan-400">Movie Master</span>, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information while using our platform.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">Information We Collect</h2>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li>Account details such as name, email, and profile picture.</li>
          <li>Your watchlist, uploaded movies, and activity within the app.</li>
          <li>Email address if you subscribe to newsletters or notifications.</li>
        </ul>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">How We Use Your Information</h2>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li>To provide personalized movie recommendations and features.</li>
          <li>To manage your account and settings.</li>
          <li>To send you updates, newsletters, or announcements if subscribed.</li>
        </ul>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">Data Protection</h2>
        <p className="text-gray-300 mb-4">
          We take appropriate measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All sensitive data, such as passwords and emails, are securely stored.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">Third-Party Services</h2>
        <p className="text-gray-300 mb-4">
          Movie Master may use third-party services such as Firebase for authentication and hosting, or analytics services to improve user experience. We do not sell or share your personal information with unrelated third parties.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">Your Rights</h2>
        <p className="text-gray-300 mb-4">
          You can request access to, correction, or deletion of your personal data at any time. Please contact our support team through the <Link to='/contact' className="font-semibold text-cyan-400">Contact Us</Link> page.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">Changes to This Policy</h2>
        <p className="text-gray-300 mb-4">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date.
        </p>

        <p className="text-gray-400 text-sm mt-8">
          © {new Date().getFullYear()} <span className="text-cyan-400 font-semibold">Movie Master</span>. All rights reserved.
        </p>
      </div>
    </div>
  );
}
